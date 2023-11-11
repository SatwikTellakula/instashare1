import {Component} from 'react'
import Header from '../Header'

import UserStories from '../UserStories'

import Posts from '../Posts'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserStories />
        <Posts />
      </div>
    )
  }
}

export default Home
