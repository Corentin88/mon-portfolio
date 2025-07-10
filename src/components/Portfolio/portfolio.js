// Importation du composant ProjetCard qui affiche les détails d'un projet individuel
import ProjetCard from "../CardPortfolio/projetCard";
// Importation de la liste des projets depuis le fichier projets.js
import projects from "../CardPortfolio/projets";

/**
 * Composant Portfolio - Affiche une galerie des projets
 * @returns {JSX.Element} Section contenant la liste des projets sous forme de cartes
 */
export default function Portfolio() {
  return (
    // Section principale avec l'ID pour la navigation et la classe pour le style
    <section id="portfolio" className="portfolio">
      {/* Conteneur principal pour le contenu du portfolio */}
      <div className="box">
        {/* En-tête de la section avec marge en bas de 20 unités */}
        <div className="mb-20">
          {/* Titre principal de la section */}
          <h2 className="h2">Découvrez mes projets !</h2>
          {/* Ligne de séparation décorative */}
          <hr className="hr" />
        </div>
        
        {/* Conteneur pour les cartes de projets avec animation de défilement */}
        {/* L'animation est gérée par les classes Tailwind : */}
        {/* - scroll-animate: déclenche l'animation au défilement */}
        {/* - opacity-0: rend initialement le contenu transparent */}
        {/* - transition-opacity: ajoute une transition fluide pour l'opacité */}
        {/* - duration-1000: la transition dure 1 seconde */}
        {/* - ease-in: effet d'accélération douce au début de la transition */}
        <div className="card scroll-animate opacity-0 transition-opacity duration-1000 ease-in">
          {/* Boucle sur le tableau des projets pour générer une carte par projet */}
          {projects.map((project) => (
            // Utilisation du composant ProjetCard pour afficher chaque projet
            // La clé unique est nécessaire pour l'optimisation de React
            <ProjetCard key={project.id} projet={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
