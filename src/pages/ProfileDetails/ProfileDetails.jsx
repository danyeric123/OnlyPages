import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProfile } from "../../services/profileService";

const ProfileDetails = ({userProfile}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileFetched = await getProfile(id);
      setProfile(profileFetched);
    };
    fetchProfile();
  }, [id,userProfile]);

  return (
    profile && userProfile&&
    <>
    <h1>{profile.name}'s Profile</h1>
      {profile.avatar?
        <img
        src={profile.avatar}
        alt={profile.name}
        avatar
        className="inline-block h-60 w-60 rounded-full ring-2 ring-white"
      />:
        <FaUserCircle size={70} />
      }
      {userProfile._id===profile._id&&<Link to="/profile/edit">
      <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        EDIT BUTTON</button></Link>}
  
        <h2>Friends List</h2>
        {profile.friends.map((friend) => (
          <>
            <Link
              key={profile._id}
              to={{
                pathname: `/profiles/${friend._id}`,
              }}
            >
              {friend.avatar ? (
                <img 
                className="inline-block h-60 w-60 rounded-full ring-2 ring-white"
                src={friend.avatar} alt={friend.name} avatar />
              ) : (
                <FaUserCircle size={70} />
              )}
              {friend.name}
            </Link>
          </>
        ))}

        <br />
        <div>
          <h3>Previously Read Collection</h3>
          {profile.read.map((book) => (
            <a href={`/books/${book.api_id}`}>
              <img
                src={`http://books.google.com/books/content?id=${book.api_id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                alt={`${book.title} front cover`}
              />
            </a>
          ))}
        </div>
        <br />
        <div>
          <h3> Currently Reading Collection</h3>
          {profile.currentlyReading.map((book) => (
            <a href={`/books/${book.api_id}`}>
              <img
                src={`http://books.google.com/books/content?id=${book.api_id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                alt={`${book.title} front cover`}
              />
            </a>
          ))}
        </div>
        <br />

        <div>
          <h3> Want to Read Collection</h3>
          {profile.wantToRead.map((book) => (
            <a href={`/books/${book.api_id}`}>
              <img
                src={`http://books.google.com/books/content?id=${book.api_id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                alt={`${book.title} front cover`}
              />
            </a>
          ))}
        </div>
      </>
    )
};

export default ProfileDetails;
