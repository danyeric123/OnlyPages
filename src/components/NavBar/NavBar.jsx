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
import "./Navbar.css";
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
        <nav className="NavbarItems">
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
              <Link to="/users">Users</Link>
            </li>
            <li className="nav-links">
              {/*   {userProfile.avatar ? (
                    <img src={userProfile.avatar} alt={userProfile.name} avatar />
                  ) : (
                    <FaUserCircle size={70} style={{ color: "blue" }} />
                  )} */}
              <FaUserCircle size={30} style={{ color: "blue" }} />
              <Link
                to={{
                  pathname: `/profiles/${userProfile?._id}`,
                }}
              >
                My Profile
              </Link>
            </li>
            <li className="nav-links">
              <FaComments size={30} style={{ color: "blue" }} />
              <Link to="/posts">All Posts</Link>
            </li>
            <li className="nav-links">
              <Link to="" onClick={handleLogout}>
                <Button>Logout</Button>
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
