/**
 * Tableau d'objets représentant les formations académiques et professionnelles
 * Les formations sont ordonnées par ordre chronologique (du plus ancien au plus récent)
 * Chaque formation peut contenir des champs optionnels comme la description et l'organisme
 */
const formations = [
  {
    id: 1,  // Identifiant unique de la formation
    annee: "2007",  // Année d'obtention
    diplome: "CAP / BEP Électrotechnique (ou équivalent)",  // Intitulé du diplôme
    // Pas de description ni d'organisme pour cette entrée
  },
  {
    id: 2,
    annee: "2023",
    diplome: "Formation Pack Office",
    description: "Maîtrise de Word, Excel, PowerPoint",  // Compétences acquises
    // Pas d'organisme spécifié pour cette formation
  },
  {
    id: 3,
    annee: "2024",
    diplome: "Certification HACCP niveaux 1 & 2",
    description: "Hygiène et sécurité alimentaire",  // Domaine de certification
  },
  {
    id: 4,
    annee: "2024",
    diplome: "Certificat de compétences de Citoyen de Sécurité Civile (PSC1)",
    description: "Protection et secours civiques – Niveau 1",  // Détails de la certification
  },
  {
    id: 5,  
    annee: "2024",
    diplome: "Baccalauréat Général",
    organisme: "Candidat libre",  // Mode d'obtention spécifique
    // Pas de description pour cette entrée
  },
  {
    id: 6,
    annee: "2025",
    diplome: "Titre professionnel Développeur Web et Web Mobile (DWWM)",
    organisme: "RNCP niveau 5 (Bac +2).Centre de formation Alaji",
    description: "Développement d'applications web front-end et back-end",
  },
];

// Exportation du tableau des formations pour utilisation dans d'autres composants
export default formations;
