import React from "react";
import { FaUserCircle } from "react-icons/fa"
import { Link } from 'react-router-dom'

const ProfileDetails = ({ location, userProfile }) => {
  const { profile } = location.state;

  return (
    <>
      <h1>{profile.name}'s Profile</h1>
      {profile.avatar?
        <img
          src={profile.avatar}
          alt={profile.name} avatar
        />:
        <FaUserCircle size={70} />
      }
      <Link to="/profile/edit">EDIT BUTTON</Link>
      <h2>Friends List</h2>
      {profile.friends.map((profile) => (
        <>
          <h3 key={profile._id}>{profile.name}</h3>
        </>
      ))}
     
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
  );
};

export default ProfileDetails;
