import {Component} from 'react'
import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PostsSearch extends Component {
  renderInitialView = () => (
    <div className="user-profile-loader-container">
      <img
        className="posts-search-initial-image"
        alt=""
        src="https://res.cloudinary.com/aneesmon/image/upload/v1649495550/Insta_Share/search-initial_oyoblm.png"
      />
      <h1 className="posts-search-initial-message">
        Search Results will be appear here
      </h1>
    </div>
  )

  renderLoadingView = () => (
    <div className="user-profile-loader-container">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  render() {
    const {apiStatus} = this.props
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderInitialView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSearchResultsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default PostsSearch
