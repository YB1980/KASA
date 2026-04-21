import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPropertyById } from '../services/api'
import Slideshow from '../components/Slideshow'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rating from '../components/Rating'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'

function Property() {

  const { id } = useParams()
  const navigate = useNavigate() // pour rediriger

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getPropertyById(id)

        // si pas de logement → redirection
        if (!data) {
          navigate('/404')
        } else {
          setProperty(data)
        }

      } catch (error) {
        // si erreur API → redirection
        navigate('/404')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [id, navigate])

  if (loading) return <p>Chargement...</p>

  return (
    <div>
        <Header />
        <Slideshow pictures={property.pictures} />
      <h1>{property.title}</h1>
<p>{property.location}</p>

<Tags tags={property.tags} />

<div className="host-rating">
  <div>
    <p>{property.host.name}</p>
    <img src={property.host.picture} alt={property.host.name} />
  </div>

  <Rating value={property.rating} />
</div>

<Collapse title="Description" content={property.description} />

<Collapse 
  title="Équipements" 
  content={
    <ul>
      {property.equipments.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  }
/>
      <Footer />
    </div>
  )
}

export default Property