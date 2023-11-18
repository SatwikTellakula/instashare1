import {Link} from 'react-router-dom'

const Header = props => {
  const {updateSearchInput} = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            onChange={onChangeSearchInput}
          />
        </li>
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
}
export default Header
