import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

import Header from '../Header'

import UserStories from '../UserStories'
import PostsSearch from '../PostsSearch'

import Posts from '../Posts'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    searchResults: [],
    apiStatus: apiStatusConstants.initial,
  }

  updateSearchInput = searchValue => {
    const {searchInput} = this.state
    this.setState({searchInput: searchValue})
    if (searchInput === '') {
      this.setState({apiStatus: apiStatusConstants.initial})
    }
  }

  getSearchResults = async () => {
    const {searchInput} = this.state
    console.log(searchInput)
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/insta-share/posts?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.posts.map(post => ({
        postId: post.post_id,
        userId: post.user_id,
        userName: post.user_name,
        profilePic: post.profile_pic,
        postDetails: post.post_details,
        likesCount: post.likes_count,
        comments: post.comments,
        createdAt: post.created_at,
      }))
      this.setState({
        searchResults: formattedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(formattedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {searchInput, searchResults, apiStatus} = this.state

    if (searchInput === '') {
      return (
        <div className="Home-Container">
          <Header
            searchInput={searchInput}
            updateSearchInput={this.updateSearchInput}
          />
          <UserStories />
          <Posts />
        </div>
      )
    }
    return (
      <div className="Home-Container">
        <Header
          searchInput={searchInput}
          updateSearchInput={this.updateSearchInput}
          getSearchResults={this.getSearchResults}
        />
        <UserStories />
        <PostsSearch
          searchResults={searchResults}
          apiStatus={apiStatus}
          getSearchResults={this.getSearchResults}
        />
      </div>
    )
  }
}

export default Home
