import { Link } from 'react-router-dom'
import '../styles/Error404.css'

function Error404() {
  return (
    <div className='error'>
      <span className='number-error'>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error404