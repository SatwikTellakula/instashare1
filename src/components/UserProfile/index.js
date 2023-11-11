import {Component} from 'react'
import Cookies from 'js-cookie'

class UserProfile extends Component {
  state = {
    userProfileData: [],
  }

  componentDidMount() {
    this.getUserProfile()
  }

  getUserProfile = async () => {
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
    this.setState({userProfileData: formattedData})
  }

  render() {
    const {userProfileData} = this.state
    const {
      profilePic,
      userName,
      postsCount,
      followersCount,
      followingCount,
      userId,
      userBio,
    } = userProfileData
    return (
      <div>
        <img src={profilePic} alt="userProfilePic" />
        <div>
          <p>{userName}</p>
          <div>
            <p>{postsCount}</p>
            <p>{followersCount}</p>
            <p>{followingCount}</p>
          </div>
          <p>{userId}</p>
          <p>{userBio}</p>
        </div>
      </div>
    )
  }
}

export default UserProfile
