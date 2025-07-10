// Importation des composants et hooks nécessaires
import Image from "next/image";
import ModalCard from "./modalCard";
import { useEffect, useState } from "react";

/**
 * Composant ProjetCard - Affiche une carte de projet avec une image et des informations
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.projet - Les données du projet à afficher
 * @returns {JSX.Element} Le composant de carte de projet
 */
export default function ProjetCard({ projet }) {
  // État pour gérer l'ouverture/fermeture de la modale
  const [isOpen, setIsOpen] = useState(false);

  // Effet pour gérer le défilement de la page lorsque la modale est ouverte/fermée
  useEffect(() => {
    if (isOpen) {
      // Désactive le défilement de la page lorsque la modale est ouverte
      document.body.style.overflow = "hidden";
    } else {
      // Réactive le défilement lorsque la modale est fermée
      document.body.style.overflow = "";
    }
    
    // Fonction de nettoyage qui s'exécute lors du démontage du composant
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]); // Dépendance sur l'état isOpen

  return (
    // Fragment React pour retourner plusieurs éléments sans ajouter de nœud supplémentaire au DOM
    <>
      {/* Conteneur principal de la carte de projet */}
      <div
        className="scroll-animate opacity-0 w-full max-w-[300px] max-h-[350px] flex flex-col #0d47a1 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer relative group"
        onClick={() => setIsOpen(true)} // Ouvre la modale au clic
        role="button" // Améliore l'accessibilité
        tabIndex={0} // Permet la navigation au clavier
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)} // Ouvre la modale avec la touche Entrée
      >
        {/* Conteneur de l'image du projet */}
        <div className="relative">
          {/* Image du projet avec optimisation Next.js */}
          <Image
            src={projet.image} // Source de l'image
            alt={projet.title} // Texte alternatif pour l'accessibilité
            width={400} // Largeur de l'image
            height={250} // Hauteur de l'image
            className="w-full h-[200px] object-cover rounded-xl p-1 hover:color-white/50 hover:text-white hover:text-center hover:cursor-pointer"
            priority={false} // Désactive le chargement prioritaire
          />

          {/* Overlay qui apparaît au survol */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Effet de fond flou pulsant */}
            <div className="absolute inset-0 bg-black/40 blur-sm animate-pulse animate-infinite animate-duration-[3000ms]"></div>
            {/* Texte qui apparaît au survol */}
            <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full z-10">
              Voir le projet
            </span>
          </div>
        </div>
        
        {/* Contenu textuel de la carte */}
        <div className="flex-1 flex flex-col relative p-4">
          {/* Titre du projet */}
          <h3 className="text-xl font-bold text-white text-center">
            {projet.title}
          </h3>
          
          {/* Informations sur le client et la date */}
          <p className="text-white text-sm mb-2 text-center">
            Pour {" "}
            <span className="font-semibold underline">{projet.client}</span> -{" "}
            {projet.date}
          </p>
          
          {/* Description du projet avec limitation de lignes */}
          <p
            className="text-white text-sm mb-4 text-center line-clamp-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {projet.description}
          </p>
        </div>
      </div>

      {/* Composant ModalCard qui s'affiche lorsque isOpen est vrai */}
      <ModalCard
        projet={projet} // Passe les données du projet à la modale
        isOpen={isOpen} // Contrôle l'affichage de la modale
        onClose={() => setIsOpen(false)} // Fonction pour fermer la modale
      />
    </>
  );
}
