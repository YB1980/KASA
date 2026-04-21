import '../styles/Collapse.css'
import { useState, useRef } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

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

      <div
        ref={contentRef}
        className="collapse-wrapper"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px'
        }}
      >
        <div className="collapse-content">
          <div>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse