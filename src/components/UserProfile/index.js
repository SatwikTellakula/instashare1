import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

import Header from '../Header'

import LoaderSpinner from '../LoaderSpinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class UserProfile extends Component {
  state = {
    userProfileData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getUserProfile()
  }

  getUserProfile = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {userId} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/insta-share/users/${userId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedData = {
      id: data.user_details.id,
      userId: data.user_details.user_id,
      userName: data.user_details.user_name,
      profilePic: data.user_details.profile_pic,
      followersCount: data.user_details.followers_count,
      followingCount: data.user_details.following_count,
      userBio: data.user_details.user_bio,
      postsCount: data.user_details.posts_count,
      posts: data.user_details.posts,
      stories: data.user_details.stories,
    }
    this.setState({
      userProfileData: formattedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  renderNoPostsView = () => (
    <div className="no-posts-container">
      <div className="camera-container">
        <BiCamera size={30} className="camera-icon" />
      </div>
      <h1 className="no-posts-heading">No Posts Yet</h1>
    </div>
  )

  renderPostsView = () => {
    const {userProfileData} = this.state
    const {posts} = userProfileData
    return (
      <div>
        <ul className="posts-view-container">
          {posts.map(post => (
            <li className="user-profile-post">
              <img className="post-image" src={post.image} alt="post" />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessView = () => {
    const {userProfileData} = this.state

    return (
      <>
        <div className="user-profile-success-view-container">
          <img
            src={userProfileData.profilePic}
            alt="user profile"
            className="user-profile-pic"
          />
          <div>
            <p>{userProfileData.userName}</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className="count-params">
                <span style={{color: 'black', fontWeight: 'bold'}}>
                  {userProfileData.postsCount}{' '}
                </span>
                posts
              </p>
              <p className="count-params">
                <span style={{color: 'black', fontWeight: 'bold'}}>
                  {userProfileData.followersCount}
                  {'  '}
                </span>
                followers
              </p>
              <p className="count-params">
                <span style={{color: 'black', fontWeight: 'bold'}}>
                  {userProfileData.followingCount}{' '}
                </span>
                following
              </p>
            </div>
            <p>{userProfileData.userId}</p>
            <p>{userProfileData.userBio}</p>
          </div>
        </div>
        <div>
          <ul className="user-stories-list-container">
            {userProfileData.stories.map(story => (
              <li style={{listStyleType: 'none'}}>
                <img src={story.image} alt="story" className="story-image" />
              </li>
            ))}
          </ul>
          <hr className="divider-line" />
          <div className="user-profile-posts-section">
            <BsGrid3X3 className="posts-grid-icon" />
            <h1 className="posts-heading">Posts</h1>
            {userProfileData.posts.length === 0
              ? this.renderNoPostsView()
              : this.renderPostsView()}
          </div>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loading-view-container">
      <LoaderSpinner />
    </div>
  )

  renderUserProfileView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="user-profile-container">
          {this.renderUserProfileView()}
        </div>
      </>
    )
  }
}

export default UserProfile
