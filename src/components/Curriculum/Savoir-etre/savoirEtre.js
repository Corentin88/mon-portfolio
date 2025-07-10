// Importation des dépendances nécessaires
// - React : bibliothèque principale
// - savoirEtre : données des qualités à afficher
import React from "react";
import savoirEtre from "./savoirEtreData";

/**
 * Composant SavoirEtre
 * Affiche une grille de qualités personnelles sous forme de badges
 * Chaque qualité est affichée dans une carte avec un point bleu
 */
export default function SavoirEtre() {
  return (
    // Conteneur principal prenant toute la hauteur de l'écran
    // - h-screen : hauteur de 100vh
    // - flex + items-center : centrage vertical
    // - id="savoir-etre" : ancre pour la navigation
    <div className="h-screen flex items-center" id="savoir-etre">
      {/* Conteneur avec largeur maximale et padding */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="section-title">Savoir-Être</h2>
        
        {/* Grille des qualités */}
        {/* - flex : disposition en flexbox */}
        {/* - flex-wrap : passage à la ligne sur petits écrans */}
        {/* - justify-center : centrage horizontal */}
        {/* - gap-4 : espacement entre les éléments */}
        {/* - mt-15 : marge supérieure de 15 unités */}
        <div className="flex flex-wrap justify-center gap-4 mt-15">
          {/* Boucle sur le tableau des qualités */}
          {savoirEtre.map((item) => (
            // Carte pour chaque qualité
            // - key : identifiant unique pour l'optimisation de React
            // - flex : disposition en ligne
            // - items-center : alignement vertical au centre
            // - bg-white : fond blanc
            // - p-4 : padding de 4 unités
            // - rounded-lg : coins arrondis
            // - shadow-sm : ombre légère
            // - border + border-gray-100 : bordure fine gris clair
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              {/* Point bleu décoratif */}
              <span className="text-blue-900 mr-2">•</span>
              
              {/* Texte de la qualité */}
              {/* - text-gray-700 : couleur de texte gris foncé */}
              {/* - font-jetbrains : police personnalisée via variable CSS */}
              <span 
                className="text-gray-700" 
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {item.qualite}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
