import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ProfileCard = ({ profile, userProfile, handleFriend }) => {
  return (
    <>
    {/*  <div className="max-w-sm rounded overflow-hidden shadow-lg my-4"> */}
    <div className="md:p-8 p-2 border-transparent bg-blue-100 shadow-lg mx-2 my-2 w-full">
      <Link
        to={{
          pathname: `/profiles/${profile._id}`,
          state: { profile },
        }}
      >
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            // className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            className=" py-3 px-4 flex justify-center card__media  w-screen md:w-full object-contain h-48 w-full"
          />
        ) : (
          // <FaUserCircle size={70} style={{color: "blue"}} className="w-full"/>
          <FaUserCircle size={100} style={{ color: "blue" }} className="px-2 py-3 flex item-center card__media w-screen md:w-full" />
        )}
      </Link>
      <section className="p-2 py-3 px-4 flex justify-center w-full ">
        {/* <div className="px-6 py-4"> */}
        <p className="font-bold text-black-500 text-xl text-center">
          {profile.name}
        </p>
      </section>
      <section className="px-6 py-1 ">
        {!(userProfile?._id === profile._id) &&
          !userProfile?.friends?.some(
            (eachProfile) => eachProfile._id === profile._id
          ) && (
            <button
              onClick={() => handleFriend(profile._id)}
              className="mt-1 w-full bg-blue-700 border border-transparent rounded-md py-3 px-4 flex justify-center text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Friend
            </button>
          )}
        {!(userProfile?._id === profile._id) &&
          userProfile?.friends?.some(
            (eachProfile) => eachProfile._id === profile._id
          ) && (
            <button
              onClick={() => handleFriend(profile._id)}
              className="mt-1 w-full bg-blue-700 border border-transparent rounded-md py-3 px-4 flex justify-center text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Unfriend
            </button>
          )}
      </section>
    </div>
    </>
  );
};

export default ProfileCard;
