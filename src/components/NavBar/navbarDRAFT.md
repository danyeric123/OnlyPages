import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { Button } from '../Button'
import './Navbar.css'
import { FaBook } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {FaAddressCard } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; /* for mobil menu */
import { FaBars } from "react-icons/fa"; /* for mobil menu */


class Navbar extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return (
      // {/* <>
      // {user ? ( */}
      <nav className="NavbarItems">
        <a href="/">
        <h1 className="navbar-logo"><FaBook className="fab fa-react" size={30} style={{ color: "white" }} /></h1>
        </a>
        <SearchForm history={history} />
        <div className="menu-icon" onClick={this.handleClick}>
        <!-- <FaTimes className='fas fa-times' size={30} style={{ color: "white" }} /> -->
        <!-- <FaBars className='fas fa-bars' size={30} style={{ color: "white" }} /> -->
          {this.state.active ? 
          <FaTimes className='fas fa-times' size={30} style={{ color: "white" }} /> : <FaBars className='fas fa-bars' size={30} style={{ color: "white" }} />
          }
        </div>
        <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
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
        <Button>SignUp/Login</Button>
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

export default Navbar;

