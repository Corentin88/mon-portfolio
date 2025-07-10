/**
 * Composant Footer
 * Affiche le pied de page du site avec le copyright et le crédit de développement
 * @returns {JSX.Element} Le rendu du composant Footer
 */
import Image from 'next/image';

export default function Footer() {
  return (
    // Balise footer sémantique HTML5
    <footer>
      {/* Conteneur principal du footer avec fond gris foncé et texte blanc */}
      <div className="bg-gray-800 py-4 text-gray-100">
        {/* Conteneur avec largeur maximale et padding horizontal */}
        <div className="container mx-auto px-4">
          {/* Grille flexible avec espacement négatif pour compenser le padding des enfants */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* Bloc de copyright - occupe toute la largeur sur mobile, largeur automatique sur desktop */}
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              {/* Texte de copyright avec l'année dynamique */}
              &copy; Corentin Lanaud {new Date().getFullYear()} Portfolio. All
              Rights Reserved.
            </div>
            
            {/* Bloc du crédit de développement */}
            <div className="flex justify-center items-center px-4 w-full text-center sm:w-auto sm:text-left">
              {/* Texte statique */}
              Made with {" "}
              {/* Logo de Next.js avec des classes pour la taille et l'espacement */}
              <Image 
                src="/logo/next.svg"
                alt="Next.js Logo"
                width={80}
                height={20}
                className="h-5 w-auto ml-2"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
