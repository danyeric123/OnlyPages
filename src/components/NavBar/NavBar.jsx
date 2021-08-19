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
                <FaUserCircle size={30} style={{ color: "blue" }} />
                Users
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
                <FaUserCircle
                  size={30}
                  style={{ color: "blue" }}
                  className="nav-links"
                />
                My Profile
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/posts">
                <FaComments size={30} style={{ color: "blue" }} />
                All Posts
              </Link>
            </li>
            <li className="nav-links">
              <Link to="" onClick={handleLogout}>
                {/* <button className="absolute right-60 mt-3 mr-4">
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button> */}
                <button class="border border-indigo-600 text-black-500 block rounded-md font-bold py-2 px-3 mr-2 flex items-center hover:bg-indigo-500 hover:text-white">
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
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
                <Button>Login</Button>
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
