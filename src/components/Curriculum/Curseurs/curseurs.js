// Importation du hook useState de React pour gérer l'état local du composant
import { useState, useEffect } from "react";
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
  // État pour gérer la taille du cercle en fonction de l'écran
  const [circleSize, setCircleSize] = useState({ radius: 60, strokeWidth: 12 });

  // Effet pour ajuster la taille du cercle en fonction de la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCircleSize({ radius: 60, strokeWidth: 12 });
      } else {
        setCircleSize({ radius: 120, strokeWidth: 20 });
      }
    };

    // Appel initial
    handleResize();
    
    // Écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);
    
    // Nettoyage
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  const circumference = 2 * Math.PI * circleSize.radius;
  
  // Sélection de l'élément actif (compétence ou technologie) en fonction de l'onglet actif
  const currentItem = isSkillsTab
    ? skills[currentSkill]
    : technologies[currentSkill];

  // Calcul du décalage pour l'animation du cercle de progression
  const offset = circumference - (currentItem.percent / 100) * circumference;

  // Gestion du clic sur une compétence ou une technologie
  const handleSkillClick = (index, isSkill) => {
    setCurrentSkill(index);
    setIsSkillsTab(isSkill);
  };

  // Taille du conteneur SVG basée sur le rayon et l'épaisseur du trait
  const containerSize = (circleSize.radius + circleSize.strokeWidth) * 2;

  return (
    <div className="p-4 md:p-6 container mx-auto">
      {/* Conteneur pour les boutons de compétences et technologies */}
      <div className="flex flex-col gap-4 md:gap-2 mb-8 md:mb-15">
        {/* Section des compétences */}
        <div className="w-full mb-4">
          <h3 className="text-lg md:text-xl font-bold mb-2">Langages:</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <button
                key={skill.title}
                onClick={() => handleSkillClick(index, true)}
                className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl text-white transition bg-gradient-to-r from-blue-600 to-blue-900 rounded-md h-10 md:h-14 w-28 md:w-44 hover:from-blue-900 hover:to-blue-600 flex items-center justify-center gap-1 md:gap-2 ${
                  currentSkill === index && isSkillsTab
                    ? "font-bold ring-1 md:ring-2 ring-white"
                    : ""
                }`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={32}
                  height={32}
                  className={`w-6 h-6 md:w-10 md:h-10 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                />
                <span className="text-xs md:text-base">{skill.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section des technologies */}
        <div className="w-full">
          <h3 className="text-lg md:text-xl font-bold mb-2">Technologies & Outils :</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((technology, index) => (
              <button
                key={technology.title}
                onClick={() => handleSkillClick(index, false)}
                className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl text-white transition bg-gradient-to-r from-blue-600 to-blue-900 rounded-md h-10 md:h-14 w-28 md:w-44 hover:from-blue-900 hover:to-blue-600 flex items-center justify-center gap-1 md:gap-2 ${
                  currentSkill === index && !isSkillsTab
                    ? "font-bold ring-1 md:ring-2 ring-white"
                    : ""
                }`}
              >
                <Image
                  src={technology.icon}
                  alt={technology.title}
                  width={24}
                  height={24}
                  className={`w-5 h-5 md:w-8 md:h-8 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                />
                <span className="text-xs md:text-base">{technology.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteneur du cercle de progression */}
      <div className="flex items-center justify-center mt-4 md:mt-8">
        <div className="relative" style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${containerSize} ${containerSize}`}
            className="transform -rotate-90"
          >
            <circle
              cx={circleSize.radius + circleSize.strokeWidth}
              cy={circleSize.radius + circleSize.strokeWidth}
              r={circleSize.radius}
              stroke="white"
              strokeWidth={circleSize.strokeWidth}
              strokeLinecap="round"
              filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))"
              fill="none"
              className="text-white/30"
            />
            {/* Cercle de progression bleu */}
            <circle
              cx={circleSize.radius + circleSize.strokeWidth}
              cy={circleSize.radius + circleSize.strokeWidth}
              r={circleSize.radius}
              stroke="currentColor"
              strokeWidth={circleSize.strokeWidth}
              strokeLinecap="butt"
              fill="none"
              filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="text-blue-900 transition-all duration-500 ease-in-out"
            />
          </svg>
          <div 
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-gray-800"
            style={{
              fontSize: `${circleSize.radius * 0.5}px`,
              lineHeight: 1
            }}
          >
            {currentItem.percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
