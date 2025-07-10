// Importation des polices Google depuis next/font pour une optimisation des performances
import { JetBrains_Mono, Caveat_Brush } from "next/font/google";
// Importation des styles globaux de l'application
import "./globals.css";
// Importation des composants d'interface utilisateur (actuellement commentés dans le rendu)
import Header from "@/components/Portfolio/header";
import Footer from "@/components/Portfolio/footer";

// Configuration de la police JetBrains Mono avec les propriétés suivantes :
// - subsets: pour optimiser le chargement en ne chargeant que les caractères latins
// - display: 'swap' pour éviter le FOIT (Flash of Invisible Text)
// - variable: définit une variable CSS personnalisée pour cette police
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

// Configuration de la police Caveat Brush avec une graisse spécifique (400)
const caveatBrush = Caveat_Brush({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

// Métadonnées de la page qui seront utilisées pour le SEO
// Ces informations sont utilisées par les moteurs de recherche et les réseaux sociaux
// lors du partage de la page
export const metadata = {
  title: "Mon Portfolio",
  description: "Bienvenue sur mon portfolio personnel présentant mes projets et compétences en développement web",
};

// Composant de mise en page racine (Root Layout) qui enveloppe toutes les pages de l'application
export default function RootLayout({ children }) {
  return (
    // Balise HTML racine avec attribut de langue
    <html lang="fr">
      {/* Le conteneur principal de la page */}
      <body className={`${jetBrainsMono.variable} ${caveatBrush.variable}`}>
        {/* En-tête du site (actuellement commenté) */}
        {/* <Header /> */}
        
        {/* Contenu principal qui sera injecté par Next.js */}
        {/* 'children' représente le contenu spécifique à chaque page */}
        {children}
        
        {/* Pied de page du site (actuellement commenté) */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
