// =============================================
// FICHIER D'INDEX PRINCIPAL DES COMPOSANTS
// Ce fichier centralise l'import/export de tous les composants
// pour faciliter leur utilisation dans l'application
// =============================================

// ====================
// COMPOSANTS PRINCIPAUX
// ====================
// Import des composants principaux de l'application
import Contact from './Portfolio/contact';      // Formulaire de contact
import CV from './Portfolio/cvLien';            // Lien vers le CV
import Footer from './Portfolio/footer';        // Pied de page
import Header from './Portfolio/header';        // En-tête de l'application
import Hero from './Portfolio/hero';            // Section héro avec image et titre principal
import Particles from './AnimateParticule/particles'; // Effet de particules animées
import Portfolio from './Portfolio/portfolio';  // Section portfolio
import Presentation from './Portfolio/presentation'; // Section de présentation personnelle
import Quality from './Portfolio/quality';      // Section compétences/qualités

// ====================
// COMPOSANTS CARD PORTFOLIO
// ====================
// Composants liés à l'affichage des projets du portfolio
import ModalCard from './CardPortfolio/modalCard';   // Modale de détail d'un projet
import ProjetCard from './CardPortfolio/projetCard'; // Carte individuelle de projet
import Projets from './CardPortfolio/projets';       // Conteneur de la grille de projets

// ====================
// COMPOSANT SIDEBAR
// ====================
// Barre latérale de navigation pour la version CV
import SidebarCv from './Sidebar/sidebarCv';

// ====================
// COMPOSANTS TIMELINE
// ====================
// Composant d'affichage chronologique (expériences, formations)
import Timeline from './Portfolio/Timeline/timeline';

// ====================
// COMPOSANT PRELOADER
// ====================
// Écran de chargement initial de l'application
import Preloader from './Preloader/preloader';

// ====================
// EXPORT DES COMPOSANTS
// ====================
// Export nommé de tous les composants pour une importation simplifiée
export {
  Contact,      // Formulaire de contact
  CV,           // Lien vers le CV
  Footer,       // Pied de page
  Header,       // En-tête de l'application
  Hero,         // Section héro
  Particles,    // Effet de particules animées
  Portfolio,    // Section portfolio
  Presentation, // Section de présentation personnelle
  Quality,      // Section compétences/qualités
  // CardPortfolio
  ModalCard,    // Modale de détail d'un projet
  ProjetCard,   // Carte individuelle de projet
  Projets,      // Conteneur de la grille de projets
  // Sidebar
  SidebarCv,    // Barre latérale de navigation pour la version CV
  // Timeline
  Timeline,     // Composant d'affichage chronologique
  // Preloader
  Preloader     // Écran de chargement initial de l'application
};
