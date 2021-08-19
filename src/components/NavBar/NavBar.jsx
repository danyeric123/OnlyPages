import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { FaBook } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; /* for mobil menu */
import { FaBars } from "react-icons/fa"; /* for mobil menu */
import { Button } from "../Button/Button";
// import "./Navbar.css";
// import { BiSearch } from "react-icons/fa";

const NavBar = ({ user, userProfile, handleLogout, history }) => {
  /*   state = {
    active: false
  };
 */
  /*   handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }
  console.log(state) */
  // console.log("userProfile.avatar:", userProfile.avatar)
  return (
    <>
      {user ? (
        <nav className="mx-2">
          <Link to="/">
            <FaBook
              size={30}
              style={{ color: "blue" }}
              className="navbar-logo"
            />
          </Link>
          <SearchForm history={history} />
          <div className="menu-icon">
            <FaTimes
              className="fas fa-times"
              size={30}
              style={{ color: "white" }}
            />
            <FaBars
              className="fas fa-bars"
              size={30}
              style={{ color: "white" }}
            />
          </div>
          <ul className="nav-menu active nav-menu">
            <li className="nav-links">
              <Link to="/users">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="h-6 w-6 text-blue-600">Users</span>
              </Link>
            </li>
            <li className="nav-links">
              {/*   {userProfile.avatar ? (
                    <img src={userProfile.avatar} alt={userProfile.name} avatar />
                  ) : (
                    <FaUserCircle size={70} style={{ color: "blue" }} />
                  )} */}

              <Link
                to={{
                  pathname: `/profiles/${userProfile?._id}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="h-6 w-6 text-blue-600">My Profile</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/posts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span className="h-6 w-6 text-blue-600">All Posts</span>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="" onClick={handleLogout}>
                <button className="border border-blue-400 text-black-500 bg-blue-300 block rounded-md font-bold py-2 px-6 flex items-center hover:bg-blue-600 hover:text-white">
                 {/*  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg> */}
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="NavbarItems">
          <Link to="/">
            <FaBook
              size={30}
              style={{ color: "blue" }}
              className="navbar-logo"
            />
          </Link>
          <ul className="nav-menu active nav-menu">
            <li className="nav-links">
              <Link to="/login">
                <button className="border border-indigo-600 text-black-500 block rounded-md font-bold py-2 px-3 mr-2 flex items-center hover:bg-indigo-500 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Login
                </button>
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/signup">
                <Button>SignUp</Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
