import '../styles/Footer.css'
import logofooter from '../assets/logofooter.png'

function Footer() {
  
  return (
    <>
        <footer>
          <img src={logofooter} alt="Logo de Kasa" />
          <p>@ 2020 Kasa. All rights reserved</p>
        </footer>
    </>
  )
}

export default Footer