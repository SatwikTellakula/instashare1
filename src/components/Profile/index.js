import './index.css'

const Profile = props => {
  const {profileData} = props
  const {
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
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className="count-params">
            <span style={{color: 'black', fontWeight: 'bold'}}>
              {postsCount}{' '}
            </span>
            posts
          </p>
          <p className="count-params">
            <span style={{color: 'black', fontWeight: 'bold'}}>
              {followersCount}
              {'  '}
            </span>
            followers
          </p>
          <p className="count-params">
            <span style={{color: 'black', fontWeight: 'bold'}}>
              {followingCount}{' '}
            </span>
            following
          </p>
        </div>
        <p>{userName}</p>
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
      <div className="stories-container">
        {posts.map(eachPost => (
          <div>
            <img
              src={eachPost.image}
              alt="storyImage"
              className="profile-post-image"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Profile
