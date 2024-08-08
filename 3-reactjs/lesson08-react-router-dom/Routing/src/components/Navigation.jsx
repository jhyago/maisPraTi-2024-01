import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">Sobre</Link></li>
                <li><Link to="/Contact">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation