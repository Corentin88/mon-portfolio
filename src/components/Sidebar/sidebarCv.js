// Directive pour indiquer que ce composant s'exécute côté client
"use client";

// Importation des hooks et composants nécessaires
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Importation des composants d'interface utilisateur Headless UI
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// Importation des icônes de Heroicons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Tableau des liens principaux de la barre latérale
// Chaque élément contient un label et une ancre vers une section de la page
const mainLinks = [
  { label: "Profil", href: "#profil" },
  { label: "Expériences", href: "#experiences" },
  { label: "Formations", href: "#formations" },
  { label: "Compétences", href: "#competences" },
  { label: "Savoir-être", href: "#savoir-etre" },
  { label: "Centres d'Intérêt", href: "#centre-interet" },
];

// Lien vers la page d'accueil du portfolio
const PortfolioLink = { label: "Portfolio", href: "/" };

/**
 * Composant Sidebar - Barre latérale de navigation pour le CV
 * @param {Object} props - Les propriétés du composant
 * @param {boolean} props.isOpen - État d'ouverture de la barre latérale (mobile)
 * @param {Function} props.onToggle - Fonction pour basculer l'état d'ouverture
 * @returns {JSX.Element} La barre latérale de navigation
 */
export default function Sidebar({ isOpen, onToggle }) {
  // Récupération du chemin actuel pour la navigation
  const pathname = usePathname();
  // État pour suivre la section active
  const [activeSection, setActiveSection] = useState("#profil");
  // Référence pour l'IntersectionObserver
  const observer = useRef(null);
  // Référence pour le composant Disclosure
  const disclosureRef = useRef(null);

  // Effet pour gérer l'observation des sections visibles
  useEffect(() => {
    // Configuration de l'IntersectionObserver
    const options = {
      root: null, // utilise la fenêtre comme viewport
      rootMargin: '0px', // pas de marge supplémentaire
      threshold: 0.5 // déclenche quand 50% de la section est visible
    };

    // Callback pour l'IntersectionObserver
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    // Création de l'instance d'IntersectionObserver
    observer.current = new IntersectionObserver(handleIntersect, options);

    // Observation de chaque section
    mainLinks.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) {
        observer.current.observe(element);
      }
    });

    // Nettoyage : arrête d'observer lors du démontage
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [pathname]); // Se réexécute si le chemin change

  // Fonction pour fermer le menu mobile
  const closeMenu = () => {
    // Chercher le bouton de fermeture et le cliquer
    const closeButton = document.querySelector(
      '[data-headlessui-state="open"] button[aria-expanded="true"]'
    );
    if (closeButton) {
      closeButton.click();
    }
    document.body.style.overflow = "auto";
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    // Fermer le menu immédiatement
    closeMenu();

    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Gérer le défilement du body en fonction de l'état d'ouverture
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Nettoyage
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Gestion du clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".mobile-sidebar");
      const menuButton = document.querySelector(
        "[data-headlessui-state] button"
      );

      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        !menuButton?.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Rendu du composant
  return (
    <div className="fixed w-full z-50 sidebar">
      <Disclosure as="nav" className="bg-[#ff9822] md:bg-transparent">
        {({ open }) => {
          return (
            <>
              {/* Version mobile */}
              <div className="md:hidden mobile-sidebar">
                <div className="relative flex h-16 items-center  px-4">
                  <div className="flex items-center">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#e6891e] focus:outline-none">
                      <span className="sr-only">Ouvrir le menu principal</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                  <div className="w-36 h-12 rounded-xl overflow-hidden absolute  right-50">
                    <Image
                      src="/logo/corentinLogoMobile.png"
                      alt="Logo"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Conteneur du menu mobile - S'affiche uniquement sur les petits écrans */}
                <DisclosurePanel
                  className="bg-[#ff9822] shadow-lg fixed w-full overflow-y-auto"
                  // Hauteur maximale calculée pour occuper tout l'écran sauf la hauteur de la barre de navigation
                  style={{ maxHeight: "calc(100vh - 4rem)" }}
                >
                  {/* Conteneur interne pour l'espacement et le padding */}
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Boucle sur les liens principaux pour créer les éléments du menu */}
                    {mainLinks.map((link) => (
                      // Bouton de menu pour chaque lien
                      <DisclosureButton
                        key={link.href} // Clé unique pour React
                        as="a" // Rendu comme une balise <a>
                        href={link.href} // Lien d'ancrage vers la section
                        // Gestion du clic avec fermeture du menu et défilement
                        onClick={(e) => handleLinkClick(e, link.href)}
                        // Classes conditionnelles pour le style
                        className={`block rounded-md px-3 py-2 text-base font-medium ${
                          activeSection === link.href
                            ? "bg-[#c97e34] text-white" // Style pour l'élément actif
                            : "text-white hover:bg-[#e6891e] hover:bg-opacity-70" // Style au survol
                        }`}
                      >
                        {link.label} {/* Texte du lien */}
                      </DisclosureButton>
                    ))}
                    
                    {/* Bouton spécial pour retourner au portfolio */}
                    <DisclosureButton
                      as={Link} // Utilise le composant Link de Next.js pour la navigation côté client
                      href={PortfolioLink.href} // Lien vers la page d'accueil
                      // Style distinctif avec des états de survol
                      className="block w-full text-center text-lg font-semibold px-4 py-2 
                                bg-white text-[#ff9822] rounded-md 
                                hover:bg-orange-500 hover:text-white 
                                hover:border-white hover:border-2 
                                transition-colors mt-2 mb-4"
                    >
                      {PortfolioLink.label} {/* Texte du bouton */}
                    </DisclosureButton>
                  </div>
                </DisclosurePanel>
              </div>
            </>
          );
        }}
      </Disclosure>

      {/* Version desktop */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-full w-60 bg-[#ff9822] text-white z-40`}
      >
        <div className="h-full flex flex-col justify-center items-center w-full">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-20">
            <Image
              src="/logo/corentinLogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-cover w-full h-full "
            />
          </div>
          {/* Boucle sur les liens principaux pour créer la navigation */}
          <nav className="p-4 space-y-2">
            {mainLinks.map((link) => (
              // Lien de navigation pour chaque section
              <a
                key={link.href} // Clé unique pour l'optimisation de React
                href={link.href} // Lien d'ancrage vers la section
                // Gestion du clic avec défilement fluide
                onClick={(e) => handleLinkClick(e, link.href)}
                // Classes conditionnelles pour le style
                className={`block px-4 py-2 rounded-md transition-colors ${
                  activeSection === link.href
                    ? "bg-[#c97e34] font-semibold" // Style pour l'élément actif
                    : "hover:bg-[#e6891e] hover:bg-opacity-70" // Style au survol
                }`}
              >
                {link.label} {/* Texte du lien */}
              </a>
            ))}
          </nav>

          {/* Conteneur pour le bouton de retour au portfolio */}
          <div className="p-4">
            {/* Lien de navigation vers la page d'accueil du portfolio */}
            <Link
              href={PortfolioLink.href} // Lien vers la racine du site
              // Style distinctif avec animations au survol
              className="block w-full text-center text-xl font-semibold 
                        px-4 py-2 bg-white text-[#ff9822] rounded-md 
                        hover:bg-orange-500 hover:text-white 
                        hover:border-white hover:border-2 
                        transition-colors"
            >
              {PortfolioLink.label} {/* Libellé du bouton */}
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
