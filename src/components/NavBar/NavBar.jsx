import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { FaBook } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {FaAddressCard } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaBars } from "react-icons/fa"; /* for mobil menu */

// import { BiSearch } from "react-icons/fa";

const NavBar = ({ user, userProfile, handleLogout, history }) => {
  console.log("userProfile:", userProfile)
  // console.log("userProfile.avatar:", userProfile.avatar)
  return (
    <>
      {user ? (
        <nav>
          <div>
            <ul>
              <li>
                <Link to="/"><FaBook size={30} style={{ color: "blue" }} />OnlyPages</Link>
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
                    pathname: `/profiles/${userProfile?._id}`
                  }}
                >
                  My Profile
                </Link>
              </li>
							<li>
								<Link to='/posts'>All Posts</Link>
							</li>
							<li>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
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
              <FaAddressCard size={30} style={{ color: "blue" }} />
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
