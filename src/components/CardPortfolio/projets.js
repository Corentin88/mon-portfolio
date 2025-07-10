// Importation du composant Image de Next.js pour l'optimisation des images
import Image from "next/image";

/**
 * Tableau d'objets représentant les différents projets à afficher dans le portfolio
 * Chaque objet contient les informations détaillées d'un projet
 */
const projects = [
  {
    id: 1,  // Identifiant unique du projet
    title: "Portfolio",  // Titre du projet
    client: "Corentin Lanaud",  // Nom du client ou propriétaire du projet
    lienClient: "https://corentinlanaud.fr",  // Lien vers le site du client
    description: "Mon Portfolio.",  // Description courte du projet
    descriptionFull: (  // Description détaillée avec possibilité d'utiliser du JSX
      <>
        Mon Portfolio développé avec Next.js.(Pour découvir et expérimenter next.js).
        Mise en place d'un honeypot pour protéger le formulaire de contact.
      </>
    ),
    image: "/projets/Portfolio/portfolio.png",  // Chemin vers l'image de prévisualisation
    imageModal: "/projets/Portfolio/contenuPF.png",  // Chemin vers l'image détaillée (pour la modale)
    date: "2025",  // Date de réalisation
    demoUrl: "https://corentin-lanaud.fr",  // Lien vers la démo en ligne
    githubUrl: "https://github.com/votrecompte/mon-portfolio",  // Lien vers le dépôt GitHub
    technologies: [  // Tableau des technologies utilisées
      "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "ALGO-PRONOS",
    client: "DIGICOMM",
    lienClient: "https://digicomm.fr",
    description: "Application pour prédire les résultats des matchs de football sur TELEGRAM.",
    descriptionFull: (  // Description avec intégration d'un composant Image
      <>
        Application pour prédire les résultats des matchs de football sur
        <strong> TELEGRAM</strong>
        <Image 
          src="/logo/Telegram.png" 
          alt="Telegram" 
          width="20" 
          height="20" 
          style={{
            display: 'inline-block', 
            verticalAlign: 'middle', 
            marginLeft: '5px'
          }} 
        />
        , basé sur des critères stricts et des statistiques historiques.
      </>
    ),
    image: "/projets/algo-pronos/algo-prono.png",
    imageModal: "/projets/algo-pronos/Telegramm.png",
    date: "2025",
    demoUrl: "",  // Chaîne vide si pas de démo disponible
    githubUrl: "",  // Chaîne vide si le code n'est pas public
    technologies: [
      "Symfony",
      "API externe",
      "API-Platform",
      "n8n",
      "Telegram Bot",
    ],
  },
  {
    id: 3,
    title: "Site Photographe(En développement",
    client: "Valérie",
    lienClient: "",  // Pas de lien client fourni
    description: "Site web pour une photographe.",
    descriptionFull: (
      <>
        Site web pour une photographe indépendante.
      </>
    ),
    image: "/projets/WorkInProgress/WorkinProgress.png",
    imageModal: "/projets/WorkInProgress/WorkinProgress.png",
    date: "2025",
    demoUrl: "",
    githubUrl: "",
    technologies: [],  // Tableau vide car pas de technologies spécifiées
  },
  {
    id: 4,
    title: "Météo",
    client: "Corentin Lanaud",
    lienClient: "",
    description: "Site web pour avoir des prévisions sur la météo.",
    descriptionFull: (
      <>
        Site fait pendant mon stage chez DIGICOMM pour découvrir Symfony et les API externes.
      </>
    ),
    image: "/projets/WorkInProgress/WorkinProgress.png",
    imageModal: "/projets/WorkInProgress/WorkinProgress.png",
    date: "2025",
    demoUrl: "",
    githubUrl: "",
    technologies: [
      "Symfony",
      "API externe",
    ],
  },
];

// Exportation du tableau des projets pour pouvoir l'importer dans d'autres fichiers
export default projects;
