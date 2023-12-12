import {NavLink} from 'react-router-dom'


function NavBar() {
    return(
        <nav class="nav">
            <h1>Cody Barker</h1>
            <ul>
                {/* <li><h1>Cody Barker</h1></li> */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><a to="#about">About</a></li>
                <li><a to="#projects">Projects</a></li>

            </ul>
        </nav>
    )
}

export default NavBar