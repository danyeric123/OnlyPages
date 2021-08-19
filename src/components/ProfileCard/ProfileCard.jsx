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
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
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
      <button onClick={() => handleFriend(profile._id)} className="mt-10 w-full bg-blue-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Friend</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleFriend(profile._id) } className="mt-10 w-full bg-blue-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Unfriend</button> 
      } 
      </div>  
      <br/>
   </div>

  );
}
 
export default ProfileCard;