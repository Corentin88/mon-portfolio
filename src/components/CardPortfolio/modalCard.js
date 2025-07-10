/**
 * Composant ModalCard - Affiche une modale détaillée pour un projet du portfolio
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.projet - Les données du projet à afficher
 * @param {boolean} props.isOpen - État d'ouverture/fermeture de la modale
 * @param {Function} props.onClose - Fonction de fermeture de la modale
 * @returns {JSX.Element} Le composant de modale
 */
import { useEffect } from "react";

export default function ModalCard({ projet, isOpen, onClose }) {
  // Effet pour gérer le défilement et le style du body quand la modale est ouverte
  useEffect(() => {
    // Si la modale n'est pas ouverte, on ne fait rien
    if (!isOpen) return;

    // Sauvegarder la position de défilement actuelle pour la restaurer plus tard
    const scrollY = window.scrollY;
    
    // Bloquer le défilement sur html et body pour empêcher le défilement de la page en arrière-plan
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    // Positionner le body en haut pour éviter un saut de défilement
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Ajouter une classe pour des styles spécifiques quand la modale est ouverte
    document.body.classList.add('modal-open');

    // Fonction de nettoyage qui s'exécute quand le composant est démonté ou quand isOpen change
    return () => {
      // Rétablir les styles par défaut
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Retirer la classe spécifique
      document.body.classList.remove('modal-open');
      
      // Restaurer la position de défilement précédente
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Effet pour gérer la fermeture de la modale avec la touche Échap
  useEffect(() => {
    // Si la modale n'est pas ouverte, on ne fait rien
    if (!isOpen) return;

    /**
     * Gère l'événement de touche du clavier
     * @param {KeyboardEvent} e - L'événement de clavier
     */
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    
    // Ajouter l'écouteur d'événement
    window.addEventListener("keydown", handleKeyDown);
    
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Si la modale n'est pas ouverte, on ne rend rien
  if (!isOpen) return null;

  return (
    // Conteneur principal de la modale avec fond semi-transparent
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-800/50"
      onClick={onClose}  // Fermer la modale en cliquant en dehors du contenu
    >
      {/* Contenu principal de la modale */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}  // Empêcher la fermeture en cliquant à l'intérieur
      >
        {/* Bouton de fermeture */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Fermer la modale"
        >
          {/* Icône de croix SVG */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenu de la modale */}
        <div className="p-6 text-center" style={{fontFamily: 'var(--font-jetbrains)'}}>
          <div className="md:flex gap-8">
            {/* Colonne de gauche : Image du projet */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={projet.imageModal}
                alt={projet.title}
                className="w-full max-h-[600px] object-contain rounded-lg shadow-md"
              />
            </div>
            
            {/* Colonne de droite : Détails du projet */}
            <div className="md:w-1/2">
              {/* Titre du projet */}
              <h2 className="text-4xl font-bold text-gray-900 mb-10">
                {projet.title}
              </h2>
              
              {/* Informations sur le client */}
              <p className="text-lg text-black mb-4">
                <span className="font-bold">Client :</span> {projet.client}
              </p>
              
              {/* Date du projet */}
              <p className="text-lg text-black mb-6">
                <span className="font-bold">Année :</span> {projet.date}
              </p>
              
              {/* Description complète du projet */}
              <p className="text-black mb-6">{projet.descriptionFull}</p>

              {/* Section des technologies utilisées */}
              <div className="mb-6">
                <h3 className="text-black text-xl font-semibold mb-3">
                  Technologies utilisées :
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {projet.technologies.map((tech, index) => (
                    <span
                      key={index}  // Clé unique pour chaque élément de la liste (requise par React)
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}  {/* Affiche le nom de la technologie */}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section conditionnelle pour afficher le lien vers le projet uniquement si l'URL est fournie */}
              {projet.lien && (
                <div className="mt-8">
                  {/* Lien externe qui s'ouvre dans un nouvel onglet */}
                  <a
                    href={projet.lien}  // URL du projet
                    target="_blank"     // Ouvre le lien dans un nouvel onglet
                    rel="noopener noreferrer"  // Bonnes pratiques de sécurité pour les liens target="_blank"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Voir le projet  {/* Texte du bouton */}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
