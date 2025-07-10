// Importation de React et des données des formations
import React from 'react';
import formations from './formationsData';

/**
 * Composant Formations - Affiche la section des formations académiques et professionnelles
 * Trie les formations par ordre chronologique inverse (du plus récent au plus ancien)
 * Affiche chaque formation avec son diplôme, année, organisme et description
 */
export default function Formations() {
  // Crée une copie du tableau des formations et le trie par ID décroissant
  // Cela permet d'afficher les formations les plus récentes en premier
  const formationsTriees = [...formations].sort((a, b) => b.id - a.id);

  return (
    // Conteneur principal prenant toute la hauteur de l'écran avec centrage vertical
    <div className="h-screen flex items-center" id="formations">
      {/* Conteneur avec une largeur maximale et un padding horizontal */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="section-title">Formations</h2>

        {/* Boucle sur le tableau des formations triées */}
        {formationsTriees.map((formation) => (
          // Conteneur pour chaque formation individuelle
          <div
            key={formation.id} // Clé unique pour l'optimisation du rendu React
            className="mb-6" // Marge en bas pour séparer les formations
            // Application d'une police personnalisée
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {/* Intitulé du diplôme en gras */}
            <h3 className="text-xl font-bold">- {formation.diplome}</h3>
            
            {/* Conteneur pour les détails de la formation avec une marge à gauche */}
            <div className="ml-6">
              {/* Année d'obtention en bleu foncé */}
              <p className="text-blue-900 text-sm">{formation.annee}</p>
              
              {/* Affichage conditionnel de l'organisme de formation s'il existe */}
              {formation.organisme && (
                <p className="text-gray-900 text-md">{formation.organisme}.</p>
              )}
              
              {/* Affichage conditionnel de la description détaillée si elle existe */}
              {formation.description && (
                <p className="text-gray-600 text-sm mt-1">
                  {formation.description}.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}