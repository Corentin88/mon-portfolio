// Importation du composant Image de Next.js pour une optimisation des images
import Image from "next/image";

/**
 * Composant Quality - Affiche les compétences et qualités sous forme de cartes
 * @returns {JSX.Element} Section présentant les compétences techniques et qualités
 */
export default function Quality() {
  return (
    // Section principale avec l'ID pour la navigation et la classe de style
    <section id="quality" className="quality">
      {/* Titre principal de la section */}
      <h2 className="h2">L'essence de mon travail</h2>
      {/* Ligne de séparation décorative */}
      <hr className="hr" />
      
      {/* Conteneur principal des cartes de qualité */}
      {/* flex: active le modèle de boîte flexible */}
      {/* flex-row: disposition en ligne des éléments */}
      {/* justify-center: centrage horizontal des cartes */}
      {/* gap-8: espacement de 2 unités (8 * 0.25rem) entre les cartes */}
      {/* p-13: padding de 3.25rem (13 * 0.25rem) */}
      {/* mt-15: marge supérieure de 3.75rem (15 * 0.25rem) */}
      <div className="carteQuality flex flex-row justify-center gap-8 p-13 mt-15">
        {/* Première carte - Expérience Techno */}
        <div className="flex flex-col items-center text-center w-64 p-6 scroll-animate opacity-0">
          {/* Icône représentant l'expérience technologique */}
          <Image
            src="/icons/icons8-monitor-100.png"
            alt="Expérience Techno"
            width={100}
            height={100}
            className="mb-4"
          />
          {/* Titre de la carte */}
          <h3 className="text-xl font-semibold mb-2">Expérience Techno</h3>
          {/* Description des compétences */}
          <p>Utilisation de Symfony, Next.js, n8n, Docker, API Platform...</p>
        </div>

        {/* Deuxième carte - Veille Technologique */}
        {/* animationDelay: décale le début de l'animation de 100ms */}
        <div className="flex flex-col items-center text-center w-64 p-6 scroll-animate opacity-0" style={{ animationDelay: '100ms' }}>
          {/* Icône représentant la veille technologique */}
          <Image
            src="/icons/icons8-eye-100.png"
            alt="Veille Technologique"
            width={100}
            height={100}
            className="mb-4"
          />
          {/* Titre de la carte */}
          <h3 className="text-xl font-semibold mb-2">Veille Technologique</h3>
          {/* Description de la veille technologique */}
          <p>Suivi constant des tendances, actualités et vulnérabilités.</p>
        </div>

        {/* Troisième carte - Ergonomie */}
        {/* animationDelay: décale le début de l'animation de 200ms */}
        <div className="flex flex-col items-center text-center w-64 p-6 scroll-animate opacity-0" style={{ animationDelay: '200ms' }}>
          {/* Icône représentant l'ergonomie */}
          <Image
            src="/icons/icons8-ergonomic-100.png"
            alt="Ergonomie"
            width={100}
            height={100}
            className="mb-4"
          />
          {/* Titre de la carte */}
          <h3 className="text-xl font-semibold mb-2">Ergonomie qui fait sens</h3>
          {/* Description de l'ergonomie */}
          <p>Conception d'interfaces claires et accessibles.</p>
        </div>

        {/* Quatrième carte - Passion */}
        {/* animationDelay: décale le début de l'animation de 300ms */}
        <div className="flex flex-col items-center text-center w-64 p-6 scroll-animate opacity-0" style={{ animationDelay: '300ms' }}>
          {/* Icône représentant la passion */}
          <Image
            src="/icons/icons8-passion-100.png"
            alt="Passion"
            width={100}
            height={100}
            className="mb-4"
          />
          {/* Titre de la carte */}
          <h3 className="text-xl font-semibold mb-2">Passion & innovation</h3>
          {/* Description de la passion */}
          <p>Projets persos, apprentissage continu.</p>
        </div>
      </div>
    </section>
  );
}