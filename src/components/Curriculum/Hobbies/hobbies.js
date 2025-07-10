/**
 * Composant Hobbies - Affiche une section présentant les centres d'intérêt
 * Chaque hobby est représenté par une carte avec une icône et un nom
 * Les cartes sont réactives et s'adaptent à la taille de l'écran
 */
export default function Hobbies() {
  // Tableau des centres d'intérêt avec leurs propriétés
  const hobbies = [
    { id: 1, name: "Pop Culture", emoji: "🎬" },        // Cinéma, séries, musique, etc.
    { id: 2, name: "Jeu Vidéo", emoji: "🎮" },         // Jeux vidéo et gaming
    { id: 3, name: "Science et Technologie", emoji: "🔬" }, // Actualités et découvertes scientifiques
    { id: 4, name: "Randonnée", emoji: "🥾" },         // Activités de plein air
  ];

  return (
    // Conteneur principal prenant toute la hauteur de l'écran
    <div className="h-screen flex items-center" id="centre-interet">
      {/* Conteneur avec largeur maximale et padding */}
      <div className="container">
        {/* Titre de la section */}
        <h2 className="section-title">Centres d&apos;Intérêt</h2>
        
        {/* Description des centres d'intérêt */}
        <p className="text-gray-600 text-sm mt-1 mb-15">
          Mes passions reflètent ma curiosité, ma rigueur et mon goût pour la
          création, que ce soit derrière un écran ou en pleine nature.
        </p>
        
        {/* Grille des cartes de hobbies */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {/* Boucle sur le tableau des hobbies */}
          {hobbies.map((hobby) => (
            // Carte individuelle pour chaque hobby
            <div
              key={hobby.id}  // Clé unique pour l'optimisation du rendu
              // Classes Tailwind pour le style et l'animation :
              // - flex-1 : s'adapte à l'espace disponible
              // - min/max-width : contraintes de largeur
              // - bg-white : fond blanc
              // - rounded-lg : coins arrondis
              // - shadow-md/hover:shadow-lg : effet d'ombre au survol
              // - transition-shadow : animation fluide de l'ombre
              className="flex-1 min-w-[150px] max-w-[200px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Émoji représentant le hobby */}
              <span className="text-4xl mb-2 inline-block">{hobby.emoji}</span>
              
              {/* Nom du hobby */}
              <h3 
                className="text-lg font-medium text-gray-900" 
                // Application d'une police personnalisée
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {hobby.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
