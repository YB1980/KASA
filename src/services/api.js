// Fonction pour récupérer les propriétés depuis le backend
export const getProperties = async () => {
  const response = await fetch('http://localhost:8080/api/properties')

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des logements')
  }

  const data = await response.json()
  return data
}

// Fonction pour récupérer une propriété par id
export const getPropertyById = async (id) => {
  const response = await fetch(`http://localhost:8080/api/properties/${id}`)

  if (!response.ok) {
    throw new Error('Logement introuvable')
  }

  const data = await response.json()
  return data
}