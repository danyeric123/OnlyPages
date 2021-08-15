import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({ profile, userProfile, handleFriend }) => {
  return (
    <>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }} 
      >
        <h4>{profile.name}</h4>
      </Link>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)}>Friend</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)}>Unfriend</button> 
      }   
    </>
  );
}
 
export default ProfileCard;