import {Component} from 'react'
import Header from '../Header'

import UserStories from '../UserStories'

import Posts from '../Posts'

class Home extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = searchValue => {
    this.setState({searchInput: searchValue})
  }

  render() {
    return (
      <div>
        <Header updateSearchInput={this.updateSearchInput} />
        <UserStories />
        <Posts updateSearchInput={this.updateSearchInput} />
      </div>
    )
  }
}

export default Home
