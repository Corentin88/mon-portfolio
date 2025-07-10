// Importation de React et des données des expériences
import React from "react";
import experiences from "./experiencesData";

/**
 * Composant Experiences - Affiche la section des expériences professionnelles
 * Trie les expériences par ordre chronologique inverse (du plus récent au plus ancien)
 * Affiche chaque expérience avec son poste, entreprise, période et description
 */
export default function Experiences() {
  // Crée une copie du tableau des expériences et le trie par ID décroissant
  // Cela permet d'afficher les expériences les plus récentes en premier
  const experiencesTriees = [...experiences].sort((a, b) => b.id - a.id);

  return (
    // Conteneur principal prenant toute la hauteur de l'écran avec centrage vertical
    <div className="h-screen flex items-center" id="experiences">
      {/* Conteneur avec une largeur maximale et un padding horizontal */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="section-title">Expériences</h2>

        {/* Boucle sur le tableau des expériences triées */}
        {experiencesTriees.map((experience) => (
          // Conteneur pour chaque expérience individuelle
          <div
            key={experience.id} // Clé unique pour l'optimisation du rendu React
            className="mb-6" // Marge en bas pour séparer les expériences
            // Application d'une police personnalisée
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {/* Titre du poste */}
            <h3 className="text-xl font-bold">-{experience.poste}</h3>
            
            {/* Conteneur pour les détails de l'expérience avec une marge à gauche */}
            <div className="ml-6">
              {/* Période de l'expérience en bleu foncé */}
              <p className="text-blue-900 text-sm">{experience.periode}</p>
              
              {/* Nom de l'entreprise en noir */}
              <p className="text-gray-900 text-lg">{experience.entreprise}:</p>
              
              {/* Description de l'expérience en gris plus clair */}
              <p className="text-gray-600 text-sm mt-1">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
