import { useEffect } from 'react';

export const useAnimatedSections = () => {
  useEffect(() => {
    const animationMap = {
      '#presentation': ['animate-flip-down', 'animate-once', 'animate-ease-in'],
      '#quality': ['animate-flip-down', 'animate-once', 'animate-ease-in'],
      '#portfolio': ['animate-fade', 'animate-once', 'animate-ease-in', 'animate-duration-[1200ms]'],
      '#timeline': ['animate-fade', 'animate-once', 'animate-ease-in', 'animate-duration-[1200ms]'],
    };

    // Fonction pour appliquer l'animation
    const applyAnimation = (element, animationClasses = []) => {
      if (!element) return;

      // Réinitialiser les classes d'animation
      element.classList.remove('opacity-0');
      
      // Forcer le recalcul du style pour réinitialiser l'animation
      void element.offsetWidth;
      
      // Supprimer les anciennes classes d'animation
      const allAnimationClasses = Object.values(animationMap).flat();
      element.classList.remove(...allAnimationClasses, 'animate-fade-in');
      
      // Ajouter les nouvelles classes d'animation
      element.classList.add(...animationClasses);
    };

    // Gestionnaire de clic pour les liens de navigation
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      // Désactiver temporairement le smooth scroll natif
      const originalBehavior = 'smooth';
      const originalBlock = 'start';
      
      // Appliquer l'animation avant de faire défiler
      const animationClasses = animationMap[targetId] || ['animate-fade-in'];
      const animatedEl = targetSection.querySelector('.scroll-animate') || targetSection;
      
      // Réinitialiser et appliquer l'animation à l'élément cible
      applyAnimation(animatedEl, animationClasses);
      
      // Délai avant le défilement pour s'assurer que l'animation est prête
      // et éviter les problèmes de rendu
      setTimeout(() => {
        // Fait défiler en douceur vers la section cible
        // en utilisant le comportement et le blocage d'origine
        targetSection.scrollIntoView({
          behavior: originalBehavior, // 'smooth' ou 'auto' selon la configuration
          block: originalBlock,       // 'start', 'center', 'end', ou 'nearest'
        });
      }, 50); // Délai de 50ms pour laisser le temps au navigateur de traiter l'animation

      // Met à jour l'URL dans la barre d'adresse sans recharger la page
      // Cela permet de partager le lien direct vers la section
      window.history.pushState({}, '', targetId);
    };

    // Sélectionne tous les éléments qui doivent être animés au défilement
    // Ces éléments doivent avoir la classe 'scroll-animate'
    const elements = document.querySelectorAll('.scroll-animate');
    
    // Crée un nouvel IntersectionObserver pour détecter quand les éléments entrent dans le viewport
    const observer = new IntersectionObserver(
      // Callback exécuté à chaque fois qu'un élément observé entre ou sort du viewport
      (entries) => {
        // Parcourt toutes les entrées (éléments observés)
        entries.forEach((entry) => {
          // Vérifie si l'élément est actuellement visible dans le viewport
          if (entry.isIntersecting) {
            const el = entry.target; // L'élément DOM actuel
            
            // Trouve l'élément section parent le plus proche
            // Cela permet de regrouper les animations par section
            const section = el.closest('section');
            
            // Construit l'identifiant de la section au format '#nom-section'
            // pour le faire correspondre avec les clés de animationMap
            const id = section?.id ? `#${section.id}` : null;
            
            // Récupère les classes d'animation spécifiques à cette section
            // depuis l'objet animationMap, ou utilise une animation par défaut
            // si aucune correspondance n'est trouvée
            const animationClasses = animationMap[id] || ['animate-fade-in'];

            // Applique l'animation à l'élément avec les classes récupérées
            // Cette fonction gère la logique d'application des classes CSS
            applyAnimation(el, animationClasses);
            
            // Cesse d'observer cet élément pour optimiser les performances
            // et éviter de retrigger l'animation inutilement
            observer.unobserve(el);
          }
        });
      },
      // Options de l'IntersectionObserver :
      // - threshold: 0.4 signifie que le callback sera déclenché lorsque
      //   40% de l'élément est visible dans le viewport
      { threshold: 0.4 }
    );

    // ====================================
    // CONFIGURATION INITIALE DU HOOK
    // ====================================
    
    // Ajoute l'écouteur d'événements pour les clics sur les liens d'ancrage
    // Cela gère la navigation vers les sections
    document.addEventListener('click', handleClick);
    
    // Commence à observer chaque élément devant être animé
    elements.forEach((el) => observer.observe(el));

    // Fonction de nettoyage exécutée lors du démontage du composant
    // ou avant la réexécution de l'effet
    return () => {
      // Supprime l'écouteur d'événements pour éviter les fuites de mémoire
      document.removeEventListener('click', handleClick);
      
      // Arrête d'observer tous les éléments
      // Important pour les performances et éviter les fuites de mémoire
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois au montage
};
