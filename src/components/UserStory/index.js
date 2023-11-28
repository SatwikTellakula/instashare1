import './index.css'

const UserStory = props => {
  const {userData} = props
  const {userName, storyUrl} = userData
  return (
    <div className="user-story-container">
      <img src={storyUrl} alt="" className="img-specifications" />
      <p className="text">{userName}</p>
    </div>
  )
}

export default UserStory
