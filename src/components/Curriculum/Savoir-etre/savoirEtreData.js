/**
 * Tableau d'objets représentant les qualités personnelles (savoir-être)
 * Chaque objet contient un identifiant unique et une qualité
 * Ces données sont utilisées dans le composant SavoirEtre pour afficher des badges de qualités
 */
const savoirEtre = [
  {
    id: 1,  // Identifiant unique de la qualité
    qualite: "Curieux et autonome"  // Description de la qualité
  },
  {
    id: 2,
    qualite: "Esprit d'équipe"
  },
  {
    id: 3,
    qualite: "Persévérant"
  },
  {
    id: 4,
    qualite: "Rigoureux"
  },
  {
    id: 5,
    qualite: "Sens du détail"
  }
];

// Exportation du tableau pour pouvoir l'importer dans d'autres fichiers
export default savoirEtre;
