import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { FaBook } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

// import { BiSearch } from "react-icons/fa";

const NavBar = ({ user, userProfile, profile, handleLogout, history }) => {
  console.log(userProfile)
  return (
    <>
      {user ? (
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/"><FaBook size={30} style={{ color: "blue" }} />LOGO PLACEHOLDER</Link>
              </li>
             
              <SearchForm history={history} />
              <li>
                <Link to="/users">
               Users</Link>
              </li>
              <li>
            {/*   {userProfile.avatar ? (
                    <img src={userProfile.avatar} alt={userProfile.name} avatar />
                  ) : (
                    <FaUserCircle size={70} style={{ color: "blue" }} />
                  )} */}
                  <FaUserCircle size={30} style={{ color: "blue" }} />
                <Link
                  to={{
                    pathname: "/profile",
                    state: { profile: userProfile },
                  }}
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/boards">
                <FaComments size={30} style={{ color: "blue" }} />Message Board</Link>
              </li>
              <li>
                <Link to="" onClick={handleLogout}>
                  LOG OUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
