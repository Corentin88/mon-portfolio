// Importation de la bibliothèque React (nécessaire pour JSX)
import React from "react";
// Importation du composant Curseurs qui affiche les compétences sous forme de barres de progression
import Curseurs from "../Curseurs/curseurs";

/**
 * Composant Competences - Affiche la section des compétences du CV
 * Ce composant sert de conteneur pour les éléments de la section compétences
 * Il intègre le composant Curseurs qui affiche les compétences sous forme de barres
 * 
 * @returns {JSX.Element} La section des compétences avec son titre et les curseurs
 */
export default function Competences() {
  return (
    // Conteneur principal prenant toute la hauteur de l'écran avec centrage vertical
    <div 
      className="h-screen flex items-center" 
      id="competences" // ID pour la navigation par ancres
    >
      {/* Conteneur pour le contenu avec une largeur maximale et un padding horizontal */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="section-title">Compétences</h2>
        
        {/* Composant qui affiche les compétences sous forme de barres de progression */}
        <Curseurs />
      </div>
    </div>
  );
}
