import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

const NavBar = ({ user, handleLogout, history }) => {
	return (
		<>
			{user ? (
				<nav>
					<div>
						<ul>
							<li>Welcome, {user.name}</li>
							<li>
                <Link to="/users">Users</Link>
              </li>
							<li>
								<Link to="/add">Add Post</Link>
							</li>
							<li>
								<Link to="/posts">Posts</Link>
							</li>
							<li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
							<SearchForm 
                history={history}
              />
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
