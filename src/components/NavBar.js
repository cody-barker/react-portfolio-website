import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <nav class="nav" id="nav">
            <h1>Cody Barker</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </nav>
    )
}

export default NavBar