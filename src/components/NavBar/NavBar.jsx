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
<<<<<<< HEAD
							<li>
								<Link to="/add">Add Post</Link>
							</li>
							<li>
								<Link to="/posts">Posts</Link>
							</li>
							<li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
=======
							<li>Welcome, {user.name}</li>
>>>>>>> 03f939adcb77f1fdd5d1d278f94c113afd6efdb2
							<SearchForm 
                history={history}
              />
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
                <Link to={{
									pathname: '/profile',
									state: {userProfile}
								}} >My Library(PersonalDashboard)</Link>
              </li>
							<li>
                <Link to="/board">Message Board</Link>
              </li>
							<li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
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
