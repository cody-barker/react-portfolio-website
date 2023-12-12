import {NavLink} from 'react-router-dom'


function NavBar() {
    return(
        <nav class="nav">
            <ul>
                <li><h1>Cody Barker</h1></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a rel="noopener" target="_blank" href to="#about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar