import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <ul className="nav-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <button type="button">Logout</button>
    </ul>
  </nav>
)

export default Header
