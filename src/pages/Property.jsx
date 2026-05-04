import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPropertyById } from '../services/api'
import Slideshow from '../components/Slideshow'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rating from '../components/Rating'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import '../styles/Property.css'

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
          navigate('/*')
        } else {
          setProperty(data)
        }

      } catch (error) {
        // si erreur API → redirection
        navigate('/*')
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
      <div className="property-container">

  <div className="property-top">

    <div className="property-left">
      <h1>{property.title}</h1>
      <p className="location">{property.location}</p>

      <Tags tags={property.tags} />
    </div>

    <div className="property-right">
      <div className="host">
        <p>{property.host.name}</p>
        <img src={property.host.picture} alt={property.host.name} />
      </div>

      <Rating value={property.rating} />
    </div>

  </div>

  <div className="property-bottom">
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
  </div>

</div>
      <Footer />
    </div>
  )
}

export default Property