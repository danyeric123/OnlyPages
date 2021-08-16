import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"

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
        {profile.avatar?
        <img
          src={profile.avatar}
          alt={profile.name} avatar 
        />:
        <FaUserCircle size={70} style={{color: "blue"}} />
      }
      <br />
      <br/> 
      </Link>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
<<<<<<< HEAD
      <button onClick={() => handleFriend(profile._id)}>Friend</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)}>Unfriend</button> 
=======
      <button onClick={() => handleFriend(profile._id)}>Friend {profile.name}</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)}>UnFriend {profile.name}</button> 
>>>>>>> d14b7d6e0fe97319be842fbacf0797274ab65f57
      }   
    </>
  );
}
 
export default ProfileCard;