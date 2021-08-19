import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"

const ProfileCard = ({ profile, userProfile, handleFriend }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <Link
        to={{
          pathname: `/profiles/${profile._id}`,
          state: {profile}
        }} 
      >
        {profile.avatar?
        <img
          src={profile.avatar}
          alt={profile.name} 
          className="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
        />:
        <FaUserCircle size={70} style={{color: "blue"}} className="w-full"/>
      }
        <div className="px-6 py-4">
        <div className="font-bold text-black-500 text-xl text-center">{profile.name}</div>
        </div>
      </Link>
      <br/>
      <div className="px-6 py-4 ">
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)} >Friend</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id)}>Unfriend</button> 
      } 
      </div>  
      <br/>
   </div>

  );
}
 
export default ProfileCard;