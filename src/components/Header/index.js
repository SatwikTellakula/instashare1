import {Link, withRouter} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {updateSearchInput} = props

  const onChangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  const onClickSearchButton = () => {
    const {getSearchResults} = props
    getSearchResults()
  }

  const onClickLogOut = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-menu">
          <img
            className="header-website-logo"
            alt="website logo"
            src="https://res.cloudinary.com/aneesmon/image/upload/v1648277533/Insta_Share/website-logo_yvroxv.png"
          />
          <h1 className="header-website-title">Insta Share</h1>
          <div className="input-search-container">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              onChange={onChangeSearchInput}
            />
            <button
              className="header-search-button"
              type="button"
              onClick={onClickSearchButton}
            >
              <FaSearch className="header-search-icon" />
            </button>
          </div>
        </li>
        <div className="menu-container">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/my-profile">Profile</Link>
          </li>
          <button type="button" className="nav-item" onClick={onClickLogOut}>
            Logout
          </button>
        </div>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
