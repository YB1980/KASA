// Fonction pour récupérer les propriétés depuis le backend
export const getProperties = async () => {
  const response = await fetch('http://localhost:8080/api/properties')

  // Vérifie si la requête a fonctionné
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des logements')
  }

  // Transforme la réponse en JSON
  const data = await response.json()
  return data
}