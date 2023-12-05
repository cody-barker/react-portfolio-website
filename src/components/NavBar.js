import {NavLink} from 'react-router-dom'


function NavBar() {
    return(
        <nav class="nav">
            <ul>
                <li>Cody Barker</li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar