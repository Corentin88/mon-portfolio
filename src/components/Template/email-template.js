/**
 * Composant de modèle d'email pour afficher les informations de contact
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.name - Le nom de l'expéditeur
 * @param {string} props.email - L'email de l'expéditeur
 * @param {string} props.message - Le message de l'expéditeur
 * @returns {JSX.Element} Un élément JSX représentant le modèle d'email
 */
export function EmailTemplate({ name, email, message }) {
    return (
      // Conteneur principal du modèle d'email
      <div>
        {/* Ligne affichant le nom de l'expéditeur */}
        <p><strong>Nom :</strong> {name}</p>
        
        {/* Ligne affichant l'email de l'expéditeur */}
        <p><strong>Email :</strong> {email}</p>
        
        {/* Ligne affichant le message de l'expéditeur avec un saut de ligne */}
        <p><strong>Message :</strong><br />{message}</p>
      </div>
    );
}