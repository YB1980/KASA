import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPropertyById } from '../services/api'
import Slideshow from '../components/Slideshow'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rating from '../components/Rating'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import Error404Page from './Error404Page'
import '../styles/Property.css'

function Property() {

  const { id } = useParams()

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getPropertyById(id)

        setProperty(data)

      } catch (error) {
        setProperty(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [id])

  // chargement
  if (loading) return <p>Chargement...</p>

  // si pas de data → page 404
  if (!property) return <Error404Page />

  // sinon affichage normal
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
              <div>
                {property.equipments.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            }
          />
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Property