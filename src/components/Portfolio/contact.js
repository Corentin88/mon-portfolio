// Importation des dépendances nécessaires
// - Image : composant Next.js pour l'optimisation des images
// - useState : hook React pour gérer l'état local du composant
import Image from "next/image";
import { useState } from "react";

/**
 * Composant Contact
 * Gère un formulaire de contact avec validation et envoi de données
 * Inclut la gestion des erreurs, les états de soumission et les messages de retour
 */
export default function Contact() {
  // État pour stocker les données du formulaire
  // - name : nom de l'expéditeur
  // - email : adresse email de contact
  // - message : contenu du message
  // - websiteHoneypot : champ caché pour la protection anti-spam
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    websiteHoneypot: "",
  });

  // État pour stocker les messages d'erreur de validation
  // Chaque champ a sa propre entrée d'erreur
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // État pour gérer l'affichage du chargement pendant la soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // États pour les messages de succès et d'erreur
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Valide les données du formulaire
   * @returns {boolean} true si le formulaire est valide, false sinon
   */
  const validateForm = () => {
    const newErrors = {
      // Vérifie que le nom n'est pas vide (après suppression des espaces)
      name: formData.name.trim() === "" ? "Le nom est requis" : "",
      // Vérifie le format de l'email avec une expression régulière
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "Email invalide"
        : "",
      // Vérifie que le message n'est pas vide
      message: formData.message.trim() === "" ? "Le message est requis" : "",
    };
    // Met à jour l'état des erreurs
    setErrors(newErrors);
    // Retourne true si aucune erreur n'est trouvée
    return Object.values(newErrors).every((error) => error === "");
  };

  /**
   * Gère la soumission du formulaire
   * @param {Event} e - L'événement de soumission du formulaire
   */
  const handleSubmit = async (e) => {
    // Empêche le rechargement de la page
    e.preventDefault();
    // Valide le formulaire avant soumission
    if (!validateForm()) return;
  
    // Active l'état de chargement et réinitialise les messages
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      // Envoie une requête POST à l'API de contact
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Attend et parse la réponse JSON
      const data = await response.json();
  
      // Vérifie si la réponse contient une erreur
      if (!response.ok) {
        // Affiche l'erreur spécifique du serveur ou un message par défaut
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
  
      // Affiche un message de succès
      setSuccessMessage("Votre message a été envoyé avec succès !");
      // Efface le message de succès après 3 secondes
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
  
      // Réinitialise le formulaire après un envoi réussi
      setFormData({
        name: "",
        email: "",
        message: "",
        websiteHoneypot: "",
      });
    } catch (error) {
      // En cas d'erreur, affiche le message d'erreur dans la console et dans l'interface
      console.error("Erreur lors de l'envoi:", error);
      setErrorMessage(error.message);
    } finally {
      // Désactive l'état de chargement dans tous les cas (succès ou échec)
      setIsSubmitting(false);
    }
  };
  
  return (
    // Section principale du composant avec l'ID pour la navigation
    <section id="contact" className="contact flex justify-center">
      <div className="box">
        {/* En-tête de la section contact */}
        <div className="mb-10 text-center">
          <h2 className="h2">Contact</h2>
          <hr className="hr mx-auto" />
        </div>
        
        {/* Formulaire de contact */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-20 text-lg font-bold"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {/* Conteneur principal du formulaire avec disposition responsive */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Colonne de gauche pour les champs nom et email */}
            <div className="w-full flex flex-col justify-between md:w-1/2 space-y-4">
              {/* Champ caché pour la protection anti-spam (honeypot) */}
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="websiteHoneypot"
                  value={formData.websiteHoneypot} 
                  onChange={(e) =>
                    setFormData({ ...formData, websiteHoneypot: e.target.value })
                  }
                  className="absolute left-[-9999px]"
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                {/* Champ Nom */}
                <label htmlFor="name" className="flex items-center gap-2">
                  <Image
                    src="/icons/icons8-profile-48.png"
                    alt="Profile"
                    width={48}
                    height={48}
                  />
                  Prénom & Nom :
                </label>
                <input
                  className="w-full h-15 bg-white border-2 border-gray-800 rounded-lg p-2 text-black mt-"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Prénom & Nom..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {/* Affichage des erreurs de validation pour le nom */}
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              
              {/* Champ Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="flex items-center gap-2">
                  <Image
                    src="/icons/icons8-at-sign-48.png"
                    alt="Email"
                    width={48}
                    height={48}
                  />
                  Votre Email :
                </label>
                <input
                  className="w-full h-15 bg-white border-2 border-gray-800 rounded-lg p-2 text-black"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Écrivez votre Email..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {/* Affichage des erreurs de validation pour l'email */}
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
            
            {/* Colonne de droite pour le champ message */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="flex items-center gap-2">
                  <Image
                    src="/icons/icons8-message-48.png"
                    alt="Message"
                    width={48}
                    height={48}
                  />
                  Votre Message :
                </label>
                <textarea
                  rows="10"
                  className="w-full h-50 bg-white border-2 border-gray-800 rounded-lg p-2 text-black"
                  name="message"
                  id="message"
                  placeholder="Votre Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                {/* Affichage des erreurs de validation pour le message */}
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Bouton de soumission du formulaire */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-1/2 self-center mt-10 bg-white text-black border-3 border-white p-2 rounded-lg hover:bg-gray-800 hover:text-white ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {/* Texte du bouton qui change selon l'état de soumission */}
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>

          {/* Affichage du message de succès */}
          {successMessage && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-center">
              {successMessage}
            </div>
          )}

          {/* Affichage du message d'erreur */}
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 rounded text-center">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
