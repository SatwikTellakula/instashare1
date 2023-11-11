import {Component} from 'react'
import Cookies from 'js-cookie'
import UserStory from '../UserStory'
import './index.css'

class UserStories extends Component {
  state = {
    storiesList: [],
  }

  componentDidMount() {
    this.getUserStories()
  }

  getUserStories = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.users_stories.map(story => ({
        userId: story.user_id,
        userName: story.user_name,
        storyUrl: story.story_url,
      }))
      this.setState({storiesList: updatedData})
    }
  }

  render() {
    const {storiesList} = this.state
    console.log(storiesList)
    return (
      <div className="storieslist-container">
        {storiesList.map(userDetails => (
          <UserStory userData={userDetails} />
        ))}
      </div>
    )
  }
}

export default UserStories
