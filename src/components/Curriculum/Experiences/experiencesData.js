/**
 * Tableau d'objets représentant les expériences professionnelles
 * Chaque objet contient les informations détaillées d'une expérience
 * Les expériences sont ordonnées par ordre chronologique (du plus ancien au plus récent)
 */
const experiences = [
  {
    id: 1,  // Identifiant unique de l'expérience
    poste: "OUVRIER POLYVALENT AGROALIMENTAIRE (Avant reconversion)",  // Intitulé du poste occupé
    periode: "2022-2024",  // Période d'emploi
    entreprise: "Les Légumes Du Coin",  // Nom de l'entreprise
    description: "Travail en équipe dans le secteur agroalimentaire.",  // Description des missions et responsabilités
  },
  {
    id: 2,
    poste: "Stagiaire chez DIGICOMM",
    periode: "2025",
    entreprise: "DIGICOMM",
    description:
      "Participation au développement d'une application de pari sportif chez DigiComm : conception d'une API REST sécurisée (Symfony, API Platform, JWT), intégration d'une API externe de données sportives et mise en place de workflows n8n pour notifier les résultats via Telegram.",
  },
];

// Exportation du tableau des expériences pour pouvoir l'importer dans d'autres fichiers
export default experiences;
