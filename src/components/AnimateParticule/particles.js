// Directive pour indiquer que ce composant s'exécute côté client (nécessaire pour Next.js 13+ avec App Router)
"use client";

// Importation des hooks React nécessaires
import { useEffect, useMemo, useState } from "react";
// Importation du composant Particles et de la fonction d'initialisation de tsParticles
import Particles, { initParticlesEngine } from "@tsparticles/react";
// Importation du moteur léger de particules (version allégée pour de meilleures performances)
import { loadSlim } from "@tsparticles/slim";

/**
 * Composant de particules interactives pour l'arrière-plan
 * Crée un effet visuel dynamique avec des particules qui réagissent aux interactions utilisateur
 * @returns {JSX.Element} Le composant de particules ou un fragment vide pendant le chargement
 */
export default function ParticlesComponent() {
  // État pour suivre si le moteur de particules est initialisé
  const [init, setInit] = useState(false);
  
  // État pour stocker les couleurs dynamiques récupérées des variables CSS
  const [colors, setColors] = useState({
    particle: "#ffffff", // Couleur par défaut des particules (blanc)
    link: "#ffffff"      // Couleur par défaut des liens entre particules (blanc)
  });

  /**
   * Effet pour récupérer les couleurs personnalisées depuis les variables CSS
   * S'exécute une seule fois au montage du composant
   */
  useEffect(() => {
    // Vérifie que le code s'exécute côté client
    if (typeof window !== 'undefined') {
      // Récupère les styles calculés de l'élément racine (où sont définies les variables CSS)
      const rootStyles = getComputedStyle(document.documentElement);
      
      // Récupère les valeurs des variables CSS personnalisées
      const colorParticule = rootStyles.getPropertyValue("--colorParticule").trim();
      const linkColor = rootStyles.getPropertyValue("--colorLink").trim();
      
      // Met à jour l'état avec les couleurs récupérées ou utilise les valeurs par défaut
      setColors({
        particle: colorParticule || "#ffffff",
        link: linkColor || "#ffffff"
      });
    }
  }, []); // Tableau de dépendances vide pour n'exécuter qu'au montage

  /**
   * Effet pour initialiser le moteur de particules
   * S'exécute une seule fois au montage du composant
   */
  useEffect(() => {
    // Initialise le moteur de particules de manière asynchrone
    initParticlesEngine(async (engine) => {
      // Charge la version allégée du moteur pour de meilleures performances
      await loadSlim(engine);
    }).then(() => {
      // Une fois l'initialisation terminée, met à jour l'état pour afficher les particules
      setInit(true);
    });
  }, []); // Tableau de dépendances vide pour n'exécuter qu'au montage

  /**
   * Callback appelé lorsque les particules sont chargées et prêtes
   * @param {Object} container - Le conteneur des particules initialisé
   */
  const particlesLoaded = (container) => {
    console.log(container); // Utile pour le débogage
  };

  /**
   * Configuration des options des particules
   * Utilise useMemo pour éviter les recalculs inutiles
   */
  const options = useMemo(
    () => ({
      // Configuration du fond
      background: {
        color: {
          value: "#0d47a1", // Couleur de fond bleu foncé
        },
      },
      fpsLimit: 120, // Limite d'images par seconde pour optimiser les performances
      
      // Configuration des interactions utilisateur
      interactivity: {
        events: {
          onClick: {
            enable: true,    // Active l'ajout de particules au clic
            mode: "push",   // Mode "push" pour ajouter des particules
          },
          onHover: {
            enable: true,     // Active l'interaction au survol
            mode: "repulse", // Les particules sont repoussées au survol
          },
        },
        modes: {
          push: {
            quantity: 5, // Nombre de particules ajoutées au clic
          },
          repulse: {
            distance: 200,  // Distance de répulsion des particules au survol
            duration: 0.4,  // Durée de l'animation de répulsion en secondes
          },
        },
      },
      
      // Configuration des particules
      particles: {
        color: {
          value: "none", // Couleur des particules depuis l'état
        },
        // Configuration des liens entre particules
        links: {
          color: "none",  // Couleur des liens depuis l'état
          distance: 150,       // Distance maximale pour qu'un lien se forme
          enable: true,        // Active les liens entre particules
          opacity: 0.5,        // Opacité des liens (0 à 1)
          width: 1,            // Épaisseur des liens en pixels
          triangles: {
            enable: true,      // Active les triangles entre les particules
            color: "#ffffff",  // Couleur des triangles
            opacity: 0.1,      // Opacité des triangles
            size: {min: 1, max: 5}, // Taille des triangles
          },
        },
        // Configuration du mouvement des particules
        move: {
          direction: "none",   // Direction aléatoire du mouvement
          enable: true,        // Active le mouvement des particules
          outModes: {
            default: "bounce", // Comportement au bord : rebond
          },
          random: false,       // Désactive le mouvement aléatoire
          speed: 1.5,          // Vitesse de déplacement des particules
          straight: false,     // Désactive le déplacement en ligne droite
        },
        // Configuration du nombre de particules
        number: {
          density: {
            enable: true,      // Active la densité relative à la taille de l'écran
          },
          value: 160,          // Nombre total de particules
        },
        // Configuration de l'opacité des particules
        opacity: {
          value: { min: 0.2, max: 0.5 }, // Opacité aléatoire entre 0.2 et 0.5
        },
        // Forme des particules
        shape: {
          type: "circle", // Toutes les particules sont des cercles
        },
        // Taille des particules
        size: {
          value: { min: 1, max: 5 }, // Taille aléatoire entre 1 et 5 pixels
        },
      },
      detectRetina: true, // Optimisation pour les écrans haute résolution (Retina)
    }),
    [colors] // Les options sont recalculées quand les couleurs changent
  );

  // Si le moteur est initialisé, on affiche les particules avec la configuration définie
  if (init) {
    return (
      <Particles
        id="tsparticles"       // ID unique pour le conteneur de particules
        particlesLoaded={particlesLoaded} // Callback appelé au chargement
        options={options}       // Configuration des particules
      />
    );
  }

  // Retourne un fragment vide tant que le moteur n'est pas initialisé
  // Cela évite d'afficher quoi que ce soit pendant le chargement
  return <></>;
};
