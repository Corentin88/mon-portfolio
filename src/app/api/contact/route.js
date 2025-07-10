// Importation des dépendances nécessaires
import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/Template/email-template";

// Initialisation du client Resend avec la clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);
const resendEmail = process.env.RESEND_EMAIL_TO;

// Fonction asynchrone pour gérer les requêtes POST vers l'API de contact
export async function POST(req) {
  try {
    // Extraction des données du formulaire depuis le corps de la requête
    const { websiteHoneypot, name, email, message } = await req.json();
    
    // Vérification du honeypot (protection anti-spam)
    // Si ce champ est rempli, c'est probablement un bot
    if (websiteHoneypot && websiteHoneypot.trim() !== "") {
      console.warn("Spam détecté via honeypot");
      // On renvoie une réponse positive pour ne pas indiquer que c'est un honeypot
      return new Response(
        JSON.stringify({ success: true, message: "Message reçu." }),
        { status: 200 }
      );
    }

    // Validation des champs obligatoires
    // Vérification du nom
    if (!name || name.trim() === "") {
      return new Response(JSON.stringify({ error: "Le nom est requis." }), {
        status: 400,
      });
    }

    // Validation de l'email avec une expression régulière
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Email invalide." }), {
        status: 400,
      });
    }

    // Vérification du message
    if (!message || message.trim() === "") {
      return new Response(JSON.stringify({ error: "Le message est requis." }), {
        status: 400,
      });
    }

    // Validation de la longueur des champs pour prévenir les abus
    // Limite à 50 caractères pour le nom
    if (name.length > 50) {
      return new Response(
        JSON.stringify({ error: "Trop de caractères dans le champ 'Prénom & Nom'" }),
        { status: 400 }
      );
    }
    // Limite à 1000 caractères pour le message
    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Trop de caractères dans le champ 'Message'" }),
        { status: 400 }
      );
    }

    // Envoi de l'email via Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Adresse d'expédition
      to: [resendEmail], // Destinataire (récupéré des variables d'environnement)
      subject: `Nouveau message du Portfolio`,
      // Utilisation du template d'email React personnalisé
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    // Réponse en cas de succès
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // Gestion des erreurs
    console.error(error);
    return new Response(
      JSON.stringify({ error: error.message || "Erreur interne" }),
      { status: 500 }
    );
  }
}
