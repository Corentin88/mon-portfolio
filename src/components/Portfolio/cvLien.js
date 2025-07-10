// Importation du composant Link de Next.js
// Ce composant permet une navigation côté client entre les pages sans rechargement complet de la page
import Link from 'next/link';

/**
 * Composant CV
 * Affiche une section avec un lien vers la page du CV
 * @returns {JSX.Element} Le rendu du composant CV
 */
export default function CV() {
    return (
        // Section principale avec l'ID pour la navigation et des classes Tailwind pour le style
        // flex et justify-center centrent le contenu horizontalement
        <section id="cvLien" className="cv flex justify-center">
            {/* Conteneur principal avec la classe 'box' pour le style global */}
            <div className="box">
                {/* En-tête de la section avec marge en bas (mb-10) et centrage du texte */}
                <div className="mb-10 text-center">
                    {/* Titre de la section */}
                    <h2 className="h2">CV</h2>
                    {/* Ligne de séparation décorative */}
                    <hr className="mx-auto" />
                </div>
                
                {/* Conteneur pour le bouton de lien, centré horizontalement */}
                <div className="flex justify-center">
                    {/* Lien vers la page du CV 
                        - href="/cv" : destination du lien
                        - className="bouton" : style du bouton défini dans le CSS global */}
                    <Link href="/cv" className="bouton">
                        {/* Texte du bouton */}
                        Direction mon CV
                    </Link>
                </div>
            </div>
        </section>
    );
}