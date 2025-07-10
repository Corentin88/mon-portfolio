// Importation du fichier CSS pour les styles du préchargeur
import "./preloader.css";
// Importation des hooks React nécessaires
import { useState, useEffect } from "react";

/**
 * Composant Preloader - Affiche un écran de chargement animé
 * @returns {JSX.Element} Le composant de préchargeur
 */
export default function Preloader() {
  // État pour gérer la visibilité du préchargeur
  const [isVisible, setIsVisible] = useState(true);
  // État pour gérer l'animation de sortie
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Effet pour gérer la disparition automatique du préchargeur
  useEffect(() => {
    // Démarre un minuteur pour déclencher l'animation de sortie
    const timer = setTimeout(() => {
      // Active l'animation de sortie
      setIsAnimatingOut(true);
      
      // Démarre un deuxième minuteur pour retirer complètement le préchargeur du DOM
      // après la fin de l'animation
      setTimeout(() => {
        // Cache complètement le préchargeur
        setIsVisible(false);
      }, 1000); // Correspond à la durée de la transition CSS (0.8s arrondi à 1s pour plus de sécurité)
    }, 5000); // Délai de 5 secondes avant de commencer la disparition

    // Nettoyage : annule les minuteurs si le composant est démonté
    return () => {
      clearTimeout(timer);
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une seule fois au montage

  // Si le préchargeur n'est pas visible, ne rien afficher
  if (!isVisible) return null;
  
  return (
    // Conteneur principal du préchargeur
    // La classe 'hidden' est ajoutée conditionnellement pour l'animation de sortie
    <div className={`preloader-container ${isAnimatingOut ? 'hidden' : ''}`}>
      <div className="box">
        {/* Conteneur du titre */}
        <div className="title">
          {/* Bloc d'animation */}
          <span className="block"></span>
          {/* Titre principal avec police personnalisée */}
          <h1 style={{fontFamily: "var(--font-caveat)"}}>
            Corentin Lanaud
            {/* Élément pour l'animation du point */}
            <span></span>
          </h1>
        </div>
        {/* Conteneur du rôle/sous-titre */}
        <div className="role">
          {/* Bloc d'animation du rôle */}
          <div className="block"></div>
          {/* Texte du rôle */}
          <p>Mon Portfolio</p>
        </div>
      </div>
    </div>
  );
}