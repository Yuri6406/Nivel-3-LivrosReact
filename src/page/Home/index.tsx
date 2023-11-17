import { Link } from 'react-router-dom'
import './styles.css'

function Home() {

  return (
    <nav className="navbar navbar-expand">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Catálogo
          </Link>
        </li>
        <li className="nav-item">
          <Link to="dados" className="nav-link">
            Novo
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Home
