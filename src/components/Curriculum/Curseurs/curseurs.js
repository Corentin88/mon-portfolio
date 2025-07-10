// Importation du hook useState de React pour gérer l'état local du composant
import { useState } from "react";
import Image from 'next/image';

/**
 * Composant Curseurs - Affiche des compétences sous forme de curseurs circulaires
 * Permet de basculer entre deux catégories : compétences techniques et technologies
 * Affiche un indicateur visuel du niveau de maîtrise pour chaque compétence
 */
export default function Curseurs() {
  // État pour suivre la compétence actuellement sélectionnée
  const [currentSkill, setCurrentSkill] = useState(0);
  // État pour basculer entre les onglets de compétences (true) et technologies (false)
  const [isSkillsTab, setIsSkillsTab] = useState(true);

  // Tableau des compétences en langages de programmation avec leur niveau de maîtrise (en %)
  const skills = [
    { title: "HTML", percent: 83, icon: "/curseur/langages/HTML5.svg" },
    { title: "CSS", percent: 74, icon: "/curseur/langages/CSS3.svg" },
    { title: "JavaScript", percent: 55, icon: "/curseur/langages/JavaScript.svg" },
    { title: "TypeScript", percent: 37, icon: "/curseur/langages/TypeScript.svg" },
    { title: "PHP", percent: 65, icon: "/curseur/langages/PHP.svg" },
  ];

  // Tableau des compétences en technologies/frameworks avec leur niveau de maîtrise (en %)
  const technologies = [
    { title: "Next.js", percent: 58, icon: "/curseur/techno/Next.js.svg" },
    { title: "n8n", percent: 77, icon: "/curseur/techno/n8n.svg" },
    { title: "Symfony", percent: 63, icon: "/curseur/techno/Symfony.svg" },
    { title: "MySQL", percent: 85, icon: "/curseur/techno/MySQL.svg" },
    { title: "Tailwind", percent: 70, icon: "/curseur/techno/Tailwind CSS.svg" },
    { title: "Git", percent: 69, icon: "/curseur/techno/Git.svg" },
  ];

  // Calcul de la circonférence du cercle pour l'animation du curseur (2 * π * rayon)
  const circumference = 2 * Math.PI * 120;
  
  // Sélection de l'élément actif (compétence ou technologie) en fonction de l'onglet actif
  const currentItem = isSkillsTab
    ? skills[currentSkill]
    : technologies[currentSkill];

  // Calcul du décalage pour l'animation du cercle de progression
  // Le décalage est basé sur le pourcentage de maîtrise
  const offset = circumference - (currentItem.percent / 100) * circumference;

  // Gestion du clic sur une compétence ou une technologie
  const handleSkillClick = (index, isSkill) => {
    setCurrentSkill(index);
    setIsSkillsTab(isSkill);
  };

  return (
    <div className="p-6 container">
      <div className="flex flex-wrap gap-2 mb-15" >
        {/* Section des compétences */}
        <div className="w-full mb-4" >
          {/* Titre de la section */}
          <h3 className="text-xl font-bold mb-2">Langages:</h3>
          {/* Conteneur flexible pour les boutons des compétences */}
          <div className="flex flex-wrap gap-2">
            {/* Boucle sur le tableau des compétences pour créer un bouton par compétence */}
            {skills.map((skill, index) => (
              // Bouton cliquable pour chaque compétence
              <button
                // Clé unique pour l'optimisation du rendu React
                key={skill.title}
                // Gère le clic sur le bouton, en passant l'index et true pour indiquer que c'est une compétence
                onClick={() => handleSkillClick(index, true)}
                // Classes conditionnelles pour le style du bouton :
                // - Style de base avec padding, arrondis et dégradé de couleur
                // - Effet de survol qui inverse le dégradé
                // - Mise en évidence si la compétence est sélectionnée (bordure blanche et texte en gras)
                className={`px-4 py-2 text-xl text-gray-100 transition bg-gradient-to-r from-blue-600 to-blue-900 rounded-md h-14 w-44 hover:from-blue-900 hover:to-blue-600 flex items-center justify-center gap-2 ${
                  currentSkill === index && isSkillsTab
                    ? "font-bold ring-2 ring-gray-100"
                    : ""
                }`}
              >
                {/* Icône de la compétence */}
                <Image
                  // Chemin vers l'icône de la compétence
                  src={skill.icon}
                  // Texte alternatif pour l'accessibilité, affiché si l'image ne se charge pas
                  alt={skill.title}
                  // Taille fixe pour toutes les icônes de compétences
                  width={40}
                  height={40}
                  // Classes CSS pour le style
                  className={`w-10 h-10 object-contain ${
                    // Animation de survol : légère rotation et mise à l'échelle
                    "transition-transform duration-300 hover:scale-110 hover:rotate-6"
                  }`}
                />
                {/* Affiche le nom de la compétence à côté de l'icône */}
                {skill.title}
              </button>
            ))}
          </div>
        </div>

        {/* Section des technologies et outils */}
        <div className="w-full">
          {/* Titre de la section */}
          <h3 className="text-xl font-bold mb-2">Technologies & Outils :</h3>
          {/* Conteneur flexible pour les boutons des technologies */}
          <div className="flex flex-wrap gap-2">
            {/* Boucle sur le tableau des technologies pour créer un bouton par technologie */}
            {technologies.map((technology, index) => (
              // Bouton cliquable pour chaque technologie
              <button
                // Clé unique pour l'optimisation du rendu React
                key={technology.title}
                // Gère le clic sur le bouton, en passant l'index et false pour indiquer que c'est une technologie
                onClick={() => handleSkillClick(index, false)}
                // Classes conditionnelles pour le style du bouton :
                // - Style de base avec padding, arrondis et dégradé de couleur
                // - Effet de survol qui inverse le dégradé
                // - Mise en évidence si la technologie est sélectionnée (bordure blanche et texte en gras)
                className={`px-4 py-2 text-xl text-gray-100 transition bg-gradient-to-r from-blue-600 to-blue-900 rounded-md h-14 w-44 hover:from-blue-900 hover:to-blue-600 flex items-center justify-center gap-2 ${
                  currentSkill === index && !isSkillsTab
                    ? "font-bold ring-2 ring-gray-100"
                    : ""
                }`}
              >
                {/* Icône de la technologie */}
                <Image
                  // Chemin vers l'icône de la technologie
                  src={technology.icon}
                  // Texte alternatif pour l'accessibilité
                  alt={technology.title}
                  // Taille légèrement réduite par rapport aux icônes de langages
                  width={32}
                  height={32}
                  // Classes CSS pour le style
                  className={`w-8 h-8 object-contain ${
                    // Animation de survol : légère rotation et mise à l'échelle
                    "transition-transform duration-300 hover:scale-110 hover:rotate-6"
                  }`}
                />
                {/* Affiche le nom de la technologie à côté de l'icône */}
                {technology.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <div className="relative w-72 h-72">
          <svg className="w-full h-full transform -rotate-90">
            {/* Cercle de progression avec animation */}
            <circle
              cx="50%"
              cy="50%"
              r="120"
              stroke="currentColor"
              strokeWidth="30"
              // Effet d'ombre portée pour donner de la profondeur
              filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
              fill="transparent"
              // Couleur blanche pour le cercle de fond
              className="text-white"
            />
            {/* Cercle de progression principal qui affiche visuellement le niveau de maîtrise */}
            <circle
              // Position horizontale du centre du cercle (50% de la largeur du conteneur SVG)
              cx="50%"
              // Position verticale du centre du cercle (50% de la hauteur du conteneur SVG)
              cy="50%"
              // Rayon du cercle (120 unités)
              r="120"
              // Couleur du trait, héritée de la couleur de texte actuelle
              stroke="currentColor"
              // Épaisseur du trait du cercle (30 unités)
              strokeWidth="30"
              // Le cercle est vide (pas de remplissage)
              fill="transparent"
              // Définit le motif de tirets pour le contour du cercle
              // Ici, on utilise la circonférence totale pour créer un effet de progression
              strokeDasharray={circumference}
              // Décalage du point de départ du motif de tirets
              // Permet de faire varier la portion visible du cercle en fonction du pourcentage
              strokeDashoffset={offset}
              // Classes CSS pour le style et l'animation :
              // - Couleur bleu foncé pour la partie remplie
              // - Transition fluide sur toutes les propriétés animables
              // - Durée de l'animation : 500ms
              // - Fonction de temporisation pour un mouvement naturel (ease-in-out)
              className="text-blue-900 transition-all duration-500 ease-in-out"
            />
          </svg>
          {/* Conteneur positionné de manière absolue par rapport au conteneur parent */}
          {/* Affiche le pourcentage de maîtrise au centre du cercle */}
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
            {/* Affiche dynamiquement le pourcentage de la compétence/technologie sélectionnée */}
            {currentItem.percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
