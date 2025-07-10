// Importation des dépendances
// - timelineData : données des événements de la timeline
// - Image : composant Next.js pour l'optimisation des images
import timelineData from "./timelineData";
import Image from "next/image";

/**
 * Composant Timeline
 * Affiche une chronologie interactive des événements
 * Les événements alternent de chaque côté de la ligne centrale sur les grands écrans
 */
export default function Timeline() {
  return (
    // Section principale avec ID pour la navigation
    // - flex + justify-center : centrage horizontal
    <section id="timeline" className="timeline flex justify-center">
      {/* Conteneur principal */}
      <div className="box">
        {/* En-tête de la section */}
        <div className="mb-20 text-center">
          <h2 className="h2">Timeline</h2>
          <hr className="hr mx-auto" />
        </div>
        
        {/* Conteneur de la timeline */}
        <div className="relative">
          {/* Ligne verticale centrale - visible uniquement sur les grands écrans (tl:breakpoint) */}
          {/* - absolute : positionnement absolu par rapport au conteneur parent */}
          {/* - left-1/2 : positionnement au milieu */}
          {/* - transform -translate-x-1/2 : centrage précis */}
          {/* - w-2 : largeur de 0.5rem */}
          {/* - h-full : hauteur complète du conteneur */}
          {/* - bg-white : couleur de fond blanche */}
          {/* - rounded-full : bords arrondis pour créer une ligne fine */}
          <div className="hidden tl:block absolute left-1/2 w-2 h-full bg-white transform -translate-x-1/2 rounded-full"></div>
          
          {/* Boucle sur les données de la timeline */}
          {timelineData.map((item, index) => {
            // Détermine si l'index est pair pour alterner la position des cartes
            const isEven = index % 2 === 0;
            // Classes conditionnelles pour les cartes
            // - mb-10 : marge en bas de 2.5rem
            // - relative : position relative pour les éléments enfants en position absolue
            // - scroll-animate : classe pour l'animation au défilement
            // - opacity-0 : initialement invisible (sera animé par scroll-animate)
            // - flex : disposition en flexbox
            // - flex-row ou flex-row-reverse : alternance de la direction
            const itemClasses = `mb-10 relative scroll-animate opacity-0 flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`;
            
            return (
              // Conteneur de l'élément de la timeline
              // - key : identifiant unique pour l'optimisation de React
              <div key={index} className={itemClasses}>
                {/* Contenu de la carte */}
                {/* - w-1/2 : largeur de 50% */}
                {/* - pr-4 ou pl-4 : padding à droite ou à gauche selon la position */}
                <div className={`w-1/2 ${isEven ? 'pr-4' : 'pl-4'}`}>
                  {/* Carte d'événement */}
                  {/* - bg-white : fond blanc */}
                  {/* - shadow-md : ombre moyenne */}
                  {/* - rounded-xl : coins très arrondis */}
                  {/* - p-4 : padding de 1rem */}
                  {/* - transition-all + duration-300 : animation fluide des transitions */}
                  {/* - hover:shadow-lg : effet d'ombre au survol */}
                  {/* - h-full : hauteur complète du conteneur parent */}
                  <div className="bg-white shadow-md rounded-xl p-4 transition-all duration-300 hover:shadow-lg h-full">
                    {/* Conteneur flex pour l'image et le texte */}
                    <div className="flex items-center gap-4">
                      {/* Conteneur de l'image */}
                      {/* - flex-shrink-0 : empêche le rétrécissement */}
                      {/* - w-20 h-20 : dimensions fixes */}
                      {/* - flex + items-center + justify-center : centrage du contenu */}
                      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                        {/* Image de l'événement */}
                        {/* - Utilise le composant Image de Next.js pour l'optimisation */}
                        <Image
                          src={item.logo}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="border-2 border-gray-900 rounded-lg w-full h-full object-fill"
                        />
                      </div>
                      {/* Conteneur du texte */}
                      {/* - flex : disposition en flexbox */}
                      {/* - flex-col : disposition en colonne */}
                      {/* - items-center : centrage vertical */}
                      {/* - justify-center : centrage horizontal */}
                      {/* - text-center : texte centré */}
                      <div className="flex flex-col items-center justify-center text-center" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        {/* Titre de l'événement */}
                        {/* - text-lg : taille de texte moyenne */}
                        {/* - font-bold : police en gras */}
                        {/* - text-black : couleur de texte noire */}
                        <h3 className="text-lg font-bold text-black">{item.title}</h3>
                        {/* Description de l'événement */}
                        {/* - text-sm : taille de texte petite */}
                        {/* - mt-1 : marge en haut de 0.25rem */}
                        {/* - text-gray-900 : couleur de texte grise foncée */}
                        <p className="text-sm mt-1 text-gray-900">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Point central */}
                {/* - relative : position relative pour les éléments enfants en position absolue */}
                {/* - flex-shrink-0 : empêche le rétrécissement */}
                {/* - w-8 h-8 : dimensions fixes */}
                <div className="relative flex-shrink-0 w-8 h-8">
                  {/* Point de l'événement */}
                  {/* - absolute : positionnement absolu par rapport au conteneur parent */}
                  {/* - top-14 : positionnement en haut */}
                  {/* - left-1/2 : positionnement au milieu */}
                  {/* - transform -translate-x-1/2 -translate-y-1/2 : centrage précis */}
                  {/* - rounded-full : bords arrondis pour créer un cercle */}
                  {/* - w-5 h-5 ou w-3 h-3 : dimensions fixes selon le type d'événement */}
                  {/* - bg-blue-600 ou bg-gray-400 : couleur de fond selon le type d'événement */}
                  {/* - border-4 ou border-2 : épaisseur de la bordure selon le type d'événement */}
                  {/* - border-white : couleur de la bordure blanche */}
                  <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    item.type === "major" 
                      ? "w-5 h-5 bg-blue-600 border-4 border-white" 
                      : "w-3 h-3 bg-gray-400 border-2 border-white"
                  }`}></div>
                </div>
                
                {/* Année */}
                {/* - w-1/2 : largeur de 50% */}
                {/* - flex : disposition en flexbox */}
                {/* - items-center : centrage vertical */}
                {/* - justify-start ou justify-end : centrage horizontal selon la position */}
                <div className={`w-1/2 flex items-center ${isEven ? 'pl-4 justify-start' : 'pr-4 justify-end'}`}>
                  {/* Texte de l'année */}
                  {/* - text-lg : taille de texte moyenne */}
                  {/* - text-white : couleur de texte blanche */}
                  <p className="text-lg text-white">{item.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
