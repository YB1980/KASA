import '../styles/Card.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProperties } from '../services/api'

function Card() {
  // 1️⃣ On stocke les données dans un state
  const [properties, setProperties] = useState([]) 
  const [loading, setLoading] = useState(true) // pour le chargement
  const [error, setError] = useState(null)     // pour les erreurs

  // 2️⃣ useEffect pour récupérer les données une fois au chargement
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getProperties() // appel API
        setProperties(data)               // stocke les données
      } catch (err) {
        setError(err.message)             // stocke l'erreur
      } finally {
        setLoading(false)                 // fin du chargement
      }
    }

    fetchData()

  }, []) // [] => s'exécute une seule fois au montage du composant

  // 3️⃣ Gestion de l'affichage
  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  // 4️⃣ Affichage des propriétés
  return (
    <div className="gallery">
      {properties.map((property) => (
        <Link 
          to={`/property/${property.id}`} 
          key={property.id} 
          className="card-link"
        >
          <div className="card">
            <img src={property.cover} alt={property.title} />
            <h3>{property.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Card