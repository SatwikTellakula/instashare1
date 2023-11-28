import {BsHeart, BsHeartFill} from 'react-icons/bs'

import {FaRegComment} from 'react-icons/fa'

import {BiShareAlt} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Post extends Component {
  state = {
    isLiked: false,
  }

  toggleLike = async () => {
    await this.setState(prevState => ({isLiked: !prevState.isLiked}))

    const {postData} = this.props
    const {postId} = postData
    const {isLiked} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const likedRequestBody = {
      like_status: isLiked,
    }

    const likedPostUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'POST',
      body: JSON.stringify(likedRequestBody),
    }

    const response = await fetch(likedPostUrl, options)
    const fetchedData = await response.json()

    console.log(fetchedData)
  }

  render() {
    const {postData} = this.props

    const {
      profilePic,
      userName,
      userId,
      likesCount,
      comments,
      createdAt,
      postDetails,
    } = postData

    const {isLiked} = this.state

    return (
      <div>
        <Link to={`/users/${userId}`} className="profile-link">
          <div className="profile-container">
            <img src={profilePic} alt="profilepic" className="profile" />
            <p>{userName}</p>
          </div>
        </Link>
        <div>
          <img src={postDetails.image_url} alt="imageU" />
          <div>
            {!isLiked && (
              <>
                <button
                  type="button"
                  onClick={this.toggleLike}
                  className="user-post-button"
                >
                  <BsHeart size={20} color="#262626" />
                </button>

                <FaRegComment size={20} color="#475569" />
                <BiShareAlt size={20} color="475569" />
                <p className="likes">{likesCount} likes</p>
              </>
            )}
            {isLiked && (
              <>
                <button
                  type="button"
                  onClick={this.toggleLike}
                  className="user-post-button"
                >
                  <BsHeartFill
                    className="heart-icon-container"
                    size={20}
                    color="red"
                  />
                </button>
                <FaRegComment size={20} color="#475569" />
                <BiShareAlt size={20} color="475569" />
                <p className="likes">{parseInt(likesCount) + 1} likes</p>
              </>
            )}
          </div>
          <p>{postDetails.caption}</p>
          {comments.map(comment => (
            <p key={comment.user_id} className="comments">
              <span className="likes">{comment.user_name} </span>
              <span>{comment.comment}</span>
            </p>
          ))}
          <p className="created-date">{createdAt}</p>
        </div>
      </div>
    )
  }
}

export default Post
