import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, userProfile, handleLogout, history }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<li>
                <Link to="/">LOGO PLACEHOLDER</Link>
              </li>
							<li>Welcome, {user.name}</li>
							<SearchForm 
                history={history}
              />
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
							<Link to={{
									pathname: `/profiles/${userProfile?._id}`
								}} >My Profile</Link>
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
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar
