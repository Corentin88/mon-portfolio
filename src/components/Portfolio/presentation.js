/**
 * Composant Presentation - Section de présentation personnelle
 * Affiche une introduction personnelle avec des animations au défilement
 * @returns {JSX.Element} Section de présentation avec texte animé
 */
export default function Presentation() {
  return (
    // Section principale avec l'ID pour la navigation et la classe de style
    <section id="presentation" className="presentation">
      {/* Conteneur principal pour le contenu de présentation */}
      <div className="box">
        {/* En-tête de la section */}
        <div>
          {/* Titre principal de la section */}
          <h2 className="h2">Découvrez qui je suis !</h2>
          {/* Ligne de séparation décorative */}
          <hr className="hr" />
        </div>
        
        {/* Conteneur pour le texte de présentation */}
        {/* mt-15: marge supérieure de 15 unités */}
        {/* space-y-3: espacement vertical de 3 unités entre les paragraphes */}
        <div className="presentation-text mt-15 space-y-3">
          {/* Premier paragraphe avec animation de défilement */}
          <p className="scroll-animate opacity-0 transition-opacity duration-1000 ease-in">
            Bonjour, je m&apos;appelle Corentin, développeur web en reconversion,
            passionné par l&apos;univers du code et des technologies.
          </p>
          <br />
          
          {/* Deuxième paragraphe avec animation de défilement */}
          <p className="scroll-animate opacity-0 transition-opacity duration-1000 ease-in">
            J&apos;ai choisi de me réorienter vers un domaine qui me stimule vraiment : créer,
            comprendre, et résoudre des problèmes concrets grâce au développement.
          </p>
          <br />
          
          {/* Troisième paragraphe avec animation de défilement */}
          <p className="scroll-animate opacity-0 transition-opacity duration-1000 ease-in">
            Encore en début de parcours, je construis des projets avec sérieux,
            curiosité et l&apos;envie constante de progresser.
          </p>
          <br />
          
          {/* Quatrième paragraphe avec animation de défilement */}
          <p className="scroll-animate opacity-0 transition-opacity duration-1000 ease-in">
            Chaque ligne de code est une occasion d&apos;apprendre, chaque bug une opportunité de grandir.
          </p>
        </div>
      </div>
    </section>
  );
}
