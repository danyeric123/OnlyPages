import React, {useEffect,useState} from "react";
import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getProfile } from "../../services/profileService";

const ProfileDetails = ({location, userProfile}) => {
  const id = location.pathname.split('/').reverse()[0]
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileFetched = await getProfile(id)
      setProfile(profileFetched)
    };
    fetchProfile()
  }, [id])
  
  return (
    profile &&
    <>
    <h1>{profile.name}'s Profile</h1>
      {profile.avatar?
        <img
          src={profile.avatar}
          alt={profile.name} avatar
          className="inline-block h-60 w-60 rounded-full ring-2 ring-white"
        />:
        <FaUserCircle size={70} />
      }
      <br />
      <br />
      {/*!!!!!!!!!!!!!!!! should only show if its my profile */}
      {/* { !(userProfile?._id === profile._id) &&  */}
      <Link to="/profile/edit">EDIT BUTTON</Link>
      {/*!!!!!!!!!!!!!!!! should only show if its my profile */}
      <br />
      <h2>Friends List</h2>
      {profile.friends.map((friend) => (
        <>
          <Link 
            key={profile._id}
            to={{
              pathname: `/profiles/${friend._id}`
            }}
          >
            {friend.avatar?
              <img
              src={friend.avatar}
              alt={friend.name} avatar
              />:
              <FaUserCircle size={70} />
            }
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
  );
};

export default ProfileDetails;
