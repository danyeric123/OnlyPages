 /* "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css" */

"devDependencies": {
    "autoprefixer": "^10.3.1",
    "postcss": "^8.3.6",
    "tailwindcss": "^2.2.7"
  }






  
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

 <Listbox value={selectedCollection} onChange={setSelectedCollection}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Assign Book to</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selectedCollection}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {collections.map((collection) => (
                  <Listbox.Option
                    key={collection.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={collection}
                  >
                    {({ collection, active }) => (
                      <>
                        <div className="flex items-center">
                          
                          <span
                            className={classNames(collection ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {collection.name}
                          </span>
                        </div>

                        {collection ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}


  isFormInvalid() {
    const { name, email } = this.state
    return !(name && email )
  }

  render() {
    const { name, email, avatar } = this.state;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <FaBook
              size={30}
              style={{ color: "blue" }}
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Your Profile
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
            <form
              autoComplete="off"
              onSubmit={this.handleSubmit}
              className="mt-8 space-y-6"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                Name
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="name"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="rounded-md shadow-sm -space-y-px">
                Avatar
                <div>
                  <label htmlFor="avatar" className="sr-only">
                    Avatar Image
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="avatar"
                    value={avatar}
                    name="avatar"
                    onChange={this.handleChange}
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="rounded-md shadow-sm -space-y-px">
                Email Address
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    id="email"
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  disabled={this.isFormInvalid()}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-2"
                >
                  SUBMIT
                </button>
                <Link to={`/profiles/${this.props.userProfile._id}`}>
                  <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }