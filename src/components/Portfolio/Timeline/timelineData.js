/**
 * Tableau d'objets représentant les événements de la timeline
 * Chaque objet contient les informations nécessaires pour afficher un événement
 * Ces données sont consommées par le composant Timeline
 */
const timelineData = [
  // Premier événement : Obtention du Titre Pro
  {
    title: "Titre pro Développeur Web / Web mobile",  // Titre de l'événement
    year: "2025",  // Année de l'événement
    // Description détaillée de l'événement
    description: "Obtention du Titre professionnel Développeur Web et Web Mobile (DWWM) RNCP niveau 5 (Bac +2).Centre de formation Alaji",
    logo: "/photo/alaji.webp",  // Chemin vers l'illustration de l'événement
    type: "major",  // Type d'événement (détermine le style d'affichage)
  },
  
  // Deuxième événement : Stage chez DigiComm
  {
    title: "Stagiaire Chez DigiComm",
    year: "2025",
    description: "Stage de 2 mois où j'ai développé une application de pari sportif (Algo-pronos) pour Telegram.",
    logo: "/photo/DigiComm.png",
    type: "major",
  },
  
  // Troisième événement : Début de formation
  {
    title: "Début de Formation DWWM",
    year: "2024",
    description: "Formation intensive de développeur web à Alaji.",
    logo: "/photo/alaji.webp",
    type: "minor",  // Événement secondaire (affiché différemment)
  },
  
  // Quatrième événement : Obtention du Bac
  {
    title: "Baccalauréat (Candidat libre)",
    year: "2024",
    description: "Obtention du niveau Bac pour pouvoir accéder à une formation.",
    logo: "/photo/bac.webp",
    type: "major",
  },
  
  // Cinquième événement : Début de la reconversion
  {
    title: "Début de la reconversion",
    year: "2024",
    description: "Un nouveau cap vers le développement web, entre passion et ambition.",
    logo: "/photo/Developpeur.png",
    type: "minor",
  },
  
  // Sixième événement : Agent polyvalent
  {
    title: "Agent polyvalent",
    year: "2023",
    description: "Travail en équipe dans le secteur agroalimentaire.",
    logo: "/photo/legumes-du-coin.png",
    type: "major",
  },
];

export default timelineData;
