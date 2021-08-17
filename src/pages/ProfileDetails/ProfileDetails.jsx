import React, {useEffect,useState} from "react";
import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getProfile } from "../../services/profileService";

const ProfileDetails = ({location}) => {
  const id = location.pathname.split('/').reverse()[0]
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profileFetched = await getProfile(id)
      setProfile(profileFetched)
    };
    fetchProfile()
  }, [])
  
  return (
    profile &&
    <>
    <h1>{profile.name}'s Profile</h1>
      {profile.avatar?
        <img
          src={profile.avatar}
          alt={profile.name} avatar
        />:
        <FaUserCircle size={70} />
      }
      <h2>Friends List</h2>
      {profile.friends.map((friend) => (
        <>
          <Link 
            key={profile._id}
            to={{
              pathname: '/profiles/',
              state: {profile:friend}
            }}
          >
            {friend.name}
          </Link>
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
