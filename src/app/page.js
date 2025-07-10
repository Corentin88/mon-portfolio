// Indique que ce composant s'exécute côté client (nécessaire pour Next.js 13+ avec App Router)
"use client";

// Import dynamique pour le chargement paresseux des composants
import dynamic from "next/dynamic";
// Import du hook personnalisé pour les animations de défilement
import { useAnimatedSections } from "@/hooks/useAnimatedSections";
// Import des composants de l'application
import {
  Hero,          // Section d'accueil avec le titre principal
  Presentation,  // Section de présentation personnelle
  Quality,       // Section des compétences/qualités
  Portfolio,     // Section du portfolio/projets
  Timeline,      // Frise chronologique
  CV,            // Section du CV
  Contact,       // Formulaire de contact
  Footer,        // Pied de page
  Header,        // En-tête du site
  Preloader,     // Écran de chargement initial
} from "@/components";
import { useState, useEffect } from "react";

// Chargement dynamique du composant de particules pour améliorer les performances
// (ne sera chargé que côté client)
const ParticlesComponent = dynamic(
  () => import("@/components/AnimateParticule/particles"),
  { ssr: false } // Désactive le rendu côté serveur pour ce composant
);

/**
 * Composant principal de l'application
 * Gère la structure de base et l'état de défilement
 */
export default function MainContent() {
  // Initialisation du hook personnalisé pour les animations de défilement des sections
  useAnimatedSections();
  
  // État pour suivre si l'utilisateur a fait défiler la page
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour gérer le défilement de la page
  useEffect(() => {
    /**
     * Gestionnaire d'événement de défilement
     * Met à jour l'état isScrolled en fonction de la position de défilement
     */
    const handleScroll = () => {
      // Récupère la position de défilement actuelle en prenant en compte la compatibilité entre navigateurs
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // Met à jour l'état si le défilement dépasse 50px
      setIsScrolled(scrollTop > 50);
    };
  
    // S'assure que le défilement est activé sur la page
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  
    // Ajoute l'écouteur d'événement de défilement
    // L'option { passive: true } améliore les performances sur mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Vérifie l'état initial au chargement de la page
  
    // Fonction de nettoyage qui supprime l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'au montage du composant
  
  // Rendu du composant
  return (
    <div>
      {/* Préchargeur affiché pendant le chargement initial */}
      <Preloader />
      
      {/* Composant de particules animées en arrière-plan */}
      <ParticlesComponent />
      
      {/* Contenu principal de la page */}
      <main>
        {/* En-tête avec effet de rétrécissement au défilement */}
        <Header isScrolled={isScrolled} />
        
        {/* Sections de la page dans l'ordre d'affichage */}
        <Hero />          {/* Section d'accueil */}
        <Presentation />  {/* Section de présentation */}
        <Quality />       {/* Section des compétences */}
        <Portfolio />     {/* Section du portfolio */}
        <Timeline />      {/* Frise chronologique */}
        <CV />            {/* Section CV */}
        <Contact />       {/* Formulaire de contact */}
        
        {/* Pied de page */}
        <Footer />
      </main>
    </div>
  );
}
