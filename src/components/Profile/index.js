import './index.css'

const Profile = props => {
  const {profileData, owner} = props
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
      <ul className="stories-container">
        {stories.map(eachItem => {
          const {id, image} = eachItem
          return (
            <li className="up-story-item" key={id}>
              <img
                className="up-story-image"
                alt={`${owner} story`}
                src={image}
              />
            </li>
          )
        })}
      </ul>
      <ul className="stories-container">
        {posts.map(eachItem => {
          const {id, image} = eachItem
          return (
            <li className="up-post-container" key={id}>
              <img
                className="up-post-image"
                alt={`${owner} post`}
                src={image}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Profile
