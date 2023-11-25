import './index.css'

const Profile = props => {
  const {profileData} = props
  const {
    userId,
    userName,
    profilePic,
    followersCount,
    followingCount,
    userBio,
    posts,
    postsCount,
    stories,
  } = profileData

  return (
    <>
      <div>
        <img src={profilePic} alt="profilePic" />
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
        <div className="stories-container">
          {stories.map(eachStory => (
            <div>
              <img
                src={eachStory.image}
                alt="storyImage"
                className="story-image"
              />
            </div>
          ))}
        </div>
        <div>
          {posts.map(eachPost => (
            <div className="stories-container" key={eachPost.id}>
              <img src={eachPost.image} alt="storyImage" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
