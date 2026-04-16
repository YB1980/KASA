import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPropertyById } from '../services/api'
import Slideshow from '../components/Slideshow'
import Footer from "../components/Footer"
import Header from "../components/Header"

function Property() {

  const { id } = useParams()
  const navigate = useNavigate() // 👈 pour rediriger

  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await getPropertyById(id)

        // 🔥 si pas de logement → redirection
        if (!data) {
          navigate('/404')
        } else {
          setProperty(data)
        }

      } catch (error) {
        // 🔥 si erreur API → redirection
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
      <Footer />
    </div>
  )
}

export default Property