
import {NavLink} from 'react-router-dom'

function NotFound() {
  return(
    <div className="container">
      <p className="large-text">404 Not Found</p>
      <p>That URL is incorrect.</p>
      <p>Please navigate back to the home page.</p>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default NotFound