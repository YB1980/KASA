import '../styles/Header.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  const getClassName = ({ isActive }) => isActive ? 'link-active' : ''
  
  return (
    <>
        <header>
          <img src={logo} alt='Logo de Kasa'></img>
          <nav>
            <NavLink to='/' className={getClassName}>Accueil</NavLink>
            <NavLink to='/about' className={getClassName}>A Propos</NavLink>
          </nav>
        </header>
    </>
  )
}

export default Header