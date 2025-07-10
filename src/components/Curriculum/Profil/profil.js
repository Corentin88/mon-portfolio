// Importation des fichiers CSS nécessaires
// - profil.css : contient les styles spécifiques au composant Profil
// - globals.css : contient les styles globaux de l'application
import "./profil.css";
import "../../../app/globals.css";
import Image from 'next/image';

// Définition du composant fonctionnel Profil
export default function Profil() {
  return (
    // Conteneur principal prenant toute la hauteur de l'écran
    // - flex-col : disposition en colonne
    // - items-center : centrage horizontal des éléments enfants
    // - id="profil" : identifiant pour la navigation
    <div className="h-screen flex flex-col items-center" id="profil">
      {/* Titre principal du profil */}
      <h1
        className="text-5xl font-bold mt-20 text-center underline"
        // Application d'une police personnalisée via une variable CSS
        style={{ fontFamily: "var(--font-jetbrains)" }}
      >
        Développeur Web
      </h1>
      
      {/* Conteneur pour le contenu du profil */}
      <div className="container ">
        {/* Animation du nom avec la classe 'six' définie dans profil.css */}
        {/* Chaque lettre est dans un span séparé pour l'animation individuelle */}
        <div className="animate six">
          <span>C</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>&nbsp;
          <span>L</span>
          <span>A</span>
          <span>N</span>
          <span>A</span>
          <span>U</span>
          <span>D</span>
        </div>
        
        {/* Section des informations secondaires */}
        {/* - text-gray-600 : couleur de texte gris foncé */}
        {/* - text-sm : taille de police plus petite */}
        {/* - animate-fade-up : animation de fondu vers le haut */}
        {/* - space-y-2 : espacement vertical entre les éléments enfants */}
        <div className="text-gray-600 text-sm animate-fade-up space-y-2 ">
          {/* Section de description personnelle avec marges */}
          <div className="mt-5 mb-10">
            <p>
              Développeur débutant qui transforme chaque erreur 404 en
              opportunité d&apos;amélioration.
            </p>
            <p>Mon code est aussi solide que ma détermination.</p>
          </div>

          {/* Carte d'informations de contact avec effet de survol */}
          {/* - bg-white : fond blanc */}
          {/* - p-6 : padding de 6 unités (1.5rem) */}
          {/* - rounded-lg : coins arrondis */}
          {/* - shadow-md/hover:shadow-lg : ombre légère qui s'intensifie au survol */}
          {/* - transition-shadow duration-300 : animation fluide de l'ombre */}
          {/* - space-y-2 : espacement vertical entre les éléments enfants */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2">
            {/* Ligne d'adresse avec icône */}
            <p className="flex items-center gap-2">
              {/* Icône de localisation */}
              <Image
                className="w-5 h-5"  // Taille fixe de 5 unités (1.25rem)
                src="/icons/icons8-location-50.png"
                alt="Localisation"
                width={20}
                height={20}
              />
              10 allée des aulnes 88380 ARCHES
            </p>

            {/* Ligne de téléphone avec icône */}
            <p className="flex items-center gap-2">
              {/* Icône de téléphone */}
              <Image
                className="w-5 h-5"  // Même taille que l'icône de localisation
                src="/icons/icons8-phone-50.png"
                alt="Telephone"
                width={20}
                height={20}
              />
              06 18 01 29 71
            </p>

            {/* Conteneur flexible pour les liens de contact */}
            {/* - flex-col sur mobile : disposition en colonne */}
            {/* - md:flex-row : disposition en ligne sur les écrans moyens et grands */}
            {/* - md:items-center : centrage vertical sur les écrans moyens et grands */}
            {/* - md:gap-10 : grand espacement horizontal sur les écrans moyens et grands */}
            {/* - space-y-2 : espacement vertical sur mobile */}
            {/* - md:space-y-0 : suppression de l'espacement vertical sur les écrans moyens et grands */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-10 space-y-2 md:space-y-0">
              {/* Lien email avec icône */}
              <a
                href="mailto:corentin.lanaud@wanadoo.fr"
                // Styles au survol : soulignement et changement de couleur en bleu foncé
                className="hover:underline hover:text-blue-900 flex items-center gap-2"
              >
                {/* Icône d'email */}
                <Image
                  className="w-5 h-5"
                  src="/icons/icons8-email-50.png"
                  alt="Email"
                  width={20}
                  height={20}
                />
                corentin.lanaud@wanadoo.fr
              </a>
              {/* Lien vers le profil GitHub avec icône */}
              <a
                href="https://github.com/Corentin88"
                className="hover:underline hover:text-blue-900 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Icône GitHub */}
                <Image 
                  className="w-5 h-5" 
                  src="/logo/github.svg" 
                  alt="Github" 
                  width={20}
                  height={20}
                />
                Github
              </a>

              {/* Lien vers le profil LinkedIn avec icône */}
              <a
                href="https://www.linkedin.com/in/corentin-lanaud"
                className="hover:underline hover:text-blue-900 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Icône LinkedIn */}
                <Image 
                  className="w-5 h-5" 
                  src="/logo/LinkedIn.svg" 
                  alt="Linkedin" 
                  width={20}
                  height={20}
                />
                Linkedin
              </a>
            </div>
            
            {/* Section des informations complémentaires */}
            <div className="flex justify-evenly text-gray-600 mt-15 ">
              {/* Bloc d'information sur le permis */}
              <div className="text-center">
                <div className="inline-block">
                  {/* Titre avec soulignement personnalisé */}
                  <h3 className="inline-block">PERMIS</h3>
                  {/* Ligne de séparation stylisée */}
                  <hr className="border-2 border-gray-600 w-full" />
                </div>
                {/* Détail du permis */}
                <p className="text-sm">B- Véhicule léger</p>
              </div>
              
              {/* Début du second bloc d'information */}
              <div className="text-center">
                <div className="inline-block">
                  {/* Titre avec soulignement personnalisé */}
                  <h3 className="inline-block">LANGUE</h3>
                  {/* Ligne de séparation stylisée */}
                  <hr className="border-2 border-gray-600 w-full" />
                </div>
                {/* Détail de la langue */}
                <p className="text-sm">Anglais - Niveau A2+</p>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  );
}
