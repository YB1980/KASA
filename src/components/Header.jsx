import '../styles/Header.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  
  return (
    <>
        <header>
          <img src={logo} alt='Logo de Kasa'></img>
          <nav>
            <NavLink to='/' className={({isActive}) => (isActive ? 'link-active' : null)}>Accueil</NavLink>
            <NavLink to='/about' className={({isActive}) => (isActive ? 'link-active' : null)}>A Propos</NavLink>
          </nav>
        </header>
    </>
  )
}

export default Header