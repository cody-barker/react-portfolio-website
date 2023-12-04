import {NavLink} from 'react-router-dom'
import homeIcon from '../assets/home-icon.svg'
import userIcon from '../assets/user-icon.svg'

function NavBar() {
    return(
        <nav class="nav main-nav">
            <ul>
                <li><NavLink className="nav-link" to="/"><img src={homeIcon} alt="home icon"/></NavLink></li>
                <li><NavLink className="nav-link" to="/about"><img src={userIcon} alt="about me icon"/></NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar