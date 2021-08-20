import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { FaBook } from "react-icons/fa";

const NavBar = ({ user, userProfile, handleLogout, history }) => {
  return (
    <>
      {user ? (
        <nav className="relative px-4 py-4 flex sm:flex-col justify-between items-center">
          <Link to="/">
            <img
              src="https://i.imgur.com/ZnXPhEq.jpg"
							alt="logo"
              className="justify-self rounded-full h-20 w-20 ring-4 ring-blue hover:opacity-75"
            />
          </Link>

					<Link to="" onClick={handleLogout}>
                <button className="text-white border border-blue-400 text-black-500 bg-blue-600 block rounded-md font-bold py-2 px-6 my-2 flex items-center hover:bg-blue-500 hover:text-white">
                  Logout
                </button>
              </Link>

          
          <ul className="py-4 text-2xl flex justify-between self-end items-center bg-white">
            <li className="text-gray-400 hover:opacity-50">
              <Link to="/users">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
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
                <span className="text-blue-600">Users</span>
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-12 h-12 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li className="nav-links hover:opacity-50">

              <Link
                to={{
                  pathname: `/profiles/${userProfile?._id}`,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
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
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-12 h-12 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li className="mr-8 nav-links hover:opacity-50 ">
              <Link to="/posts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
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
            <SearchForm history={history} />
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
            <li className="text-sm">
              <Link to="/login">
                <button className="border border-blue-300 text-white bg-blue-600 block rounded-md font-bold py-2 px-6 my-2 flex items-center hover:bg-blue-500 hover:text-white">
                  Login
                </button>
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/signup">
                <button className="border border-blue-300 text-white bg-blue-600 block rounded-md font-bold py-2 px-6 my-2 flex items-center hover:bg-blue-500 hover:text-white">
                  SignUp
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
