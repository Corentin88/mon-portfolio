/**
 * Composant Hero - Section d'accueil principale du portfolio
 * Affiche un message d'accueil accrocheur avec des animations
 * @returns {JSX.Element} Le rendu du composant Hero
 */
export default function Hero() {
  return (
    // Section principale du héros avec une marge supérieure de 20 unités
    <section className="hero mt-20">
      {/* Titre principal avec animation de fondu vers le haut */}
      <h1 className="hero-title animate-fade-up animate-once animate-delay-500 animate-duration-1000 animate-ease-in">
        À la recherche d&apos;un développeur ?
      </h1>
      
      {/* Premier paragraphe de texte avec animation de fondu vers le bas */}
      <p className="hero-text animate-fade-down animate-once animate-delay-1500 animate-duration-1500 animate-ease-in">
        Bonne nouvelle,
        <br />
        vous venez peut-être de le trouver. 👀
        <br />
        Développeur sympa, à l&apos;écoute, toujours partant pour transformer une
        idée en vrai projet !
      </p>
      
      {/* Deuxième paragraphe de texte avec animation de fondu par la gauche */}
      <p className="hero-text2 animate-fade-left animate-once animate-delay-3000 animate-duration-1500 animate-ease-in">
        On en parle ?
      </p>
      
      {/* Conteneur pour l'icône de défilement avec animation de fondu vers le bas */}
      <span className="animate-fade-down animate-once animate-delay-3000 animate-duration-1500 animate-ease-in flex justify-center items-center p-8">
        {/* Lien vers la section de présentation */}
        <a href="#presentation" aria-label="Aller à la section présentation">
          {/* Icône SVG de flèche vers le bas */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-40"
            role="img"
            aria-label="Flèche vers le bas"
          >
            {/* Définition du chemin de l'icône */}
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </span>
    </section>
  );
}
