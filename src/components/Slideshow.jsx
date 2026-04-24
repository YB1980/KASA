import { useState } from 'react'
import '../styles/Slideshow.css'

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const length = pictures.length

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  // si une seule image → pas de flèches ni compteur
  const isSingle = length === 1

  return (
    <div className="slideshow">

      <img 
        src={pictures[currentIndex]} 
        alt={`slide ${currentIndex}`} 
        className="slide-image"
      />

      {!isSingle && (
        <button onClick={prevSlide} className="arrow-slideshow left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}

      {!isSingle && (
        <button onClick={nextSlide} className="arrow-slideshow right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}

        {!isSingle && (
        <div className="counter">
        {currentIndex + 1} / {length}
        </div>
        )}

    </div>
  )
}

export default Slideshow