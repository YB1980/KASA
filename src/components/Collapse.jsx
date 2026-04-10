import '../styles/Collapse.css'
import { useState } from 'react'

function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">

      <div className="collapse-header">
        <h3>{title}</h3>

        <i 
          className={`fa-solid fa-chevron-up arrow ${isOpen ? 'open' : ''}`}
          onClick={toggle}
        ></i>
      </div>

      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}

    </div>
  )
}

export default Collapse