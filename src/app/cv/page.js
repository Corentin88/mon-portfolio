// Indique que ce composant s'exécute côté client (nécessaire pour Next.js 13+ avec App Router)
"use client";

// Import des hooks de React
import { useState, useEffect } from "react";
// Import des composants de la page CV
import Sidebar from "@/components/Sidebar/sidebarCv";
import Profil from "@/components/Curriculum/Profil/profil";
import Experiences from "@/components/Curriculum/Experiences/experiences";
import Competences from "@/components/Curriculum/Competences/competences";
import SavoirEtre from "@/components/Curriculum/Savoir-etre/savoirEtre";
import Hobbies from "@/components/Curriculum/Hobbies/hobbies";
import Formations from "@/components/Curriculum/Formations/formations";

/**
 * Page principale du CV
 * Gère l'affichage de toutes les sections du CV avec une barre latérale
 */
export default function PageCv() {
  // État pour gérer l'ouverture/fermeture de la barre latérale
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Effet pour gérer le défilement fluide vers les ancres (#section)
   * avec un décalage pour compenser la hauteur de l'en-tête fixe
   */
  useEffect(() => {
    /**
     * Gère le défilement vers une section spécifique basée sur le hash de l'URL
     */
    const handleHashChange = () => {
      // Récupère le hash actuel de l'URL (ex: #experiences)
      const hash = window.location.hash;
      
      // Si un hash est présent dans l'URL
      if (hash) {
        // Trouve l'élément correspondant au hash
        const element = document.querySelector(hash);
        
        // Si l'élément existe
        if (element) {
          // Décalage pour compenser la hauteur de l'en-tête fixe
          const yOffset = -80;
          // Calcule la position de défilement en tenant compte du décalage
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          // Défilement fluide vers la position calculée
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    // Gérer le défilement au chargement initial si un hash est présent dans l'URL
    handleHashChange();

    // Ajouter un écouteur pour les changements de hash (navigation par ancres)
    window.addEventListener("hashchange", handleHashChange);

    // Nettoyage : supprimer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécute qu'au montage

  return (
    // Conteneur principal avec fond gris clair et disposition en colonne (ou en ligne sur grand écran)
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Barre latérale avec état d'ouverture/fermeture */}
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      
      {/* Contenu principal */}
      <main
        // Classes conditionnelles pour l'animation de la marge gauche
        className={`flex-1 p-4 md:p-8 transition-all duration-300 overflow-y-auto ${
          isOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        {/* Conteneur pour toutes les sections du CV avec espacement vertical */}
        <div className="flex flex-col gap-40 pb-20">
          {/* Section Profil */}
          <Profil />
          <hr className="hr2 mx-auto" />
          
          {/* Section Expériences professionnelles */}
          <Experiences />
          <hr className="hr2 mx-auto" />
          
          {/* Section Formations */}
          <Formations />
          <hr className="hr2 mx-auto" />
          
          {/* Section Compétences techniques */}
          <Competences />
          <hr className="hr2 mx-auto" />
          
          {/* Section Savoir-être */}
          <SavoirEtre />
          <hr className="hr2 mx-auto" />
          
          {/* Section Centres d'intérêt */}
          <Hobbies />
        </div>
      </main>
    </div>
  );
}
