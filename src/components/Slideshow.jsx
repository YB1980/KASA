import { useState } from 'react'
import '../styles/Slideshow.css'

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const length = pictures.length

  // image suivante
  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  // image précédente
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  // si une seule image → pas de flèches ni compteur
  const isSingle = length === 1

  return (
    <div className="slideshow">

      {/* image */}
      <img 
        src={pictures[currentIndex]} 
        alt={`slide ${currentIndex}`} 
        className="slide-image"
      />

      {/* flèche gauche */}
      {!isSingle && (
        <button onClick={prevSlide} className="arrow-slideshow left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      {/* flèche droite */}
      {!isSingle && (
        <button onClick={nextSlide} className="arrow-slideshow right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

        {/* compteur */}
        {!isSingle && (
        <div className="counter">
        {currentIndex + 1} / {length}
        </div>
        )}

    </div>
  )
}

export default Slideshow