import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import ProfileList from '../ProfileList/ProfileList'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import * as profileAPI from '../../services/profileService'
import PostList from '../PostList/PostList'
import PostDetail from '../PostDetails/PostDetails'
import AddPost from '../AddPost/AddPost'
import PostDetails from '../PostDetails/PostDetails'

class App extends Component {
	state = {
    user: authService.getUser(),
    userProfile: null
  }

	handleLogout = () => {
    authService.logout();
    this.setState({ user: null, userProfile: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = async () => {
    this.setState({ user: await authService.getUser(), userProfile: await profileAPI.getUserProfile()});
  };

	handleFriend = async (friendId) => {
    const updatedProfile = await profileAPI.friendAndUnfriend(friendId)
    this.setState({userProfile: updatedProfile})
  }

	// handleaddPost = async newPostData => {
	// 	const newPost = await profileAPI.create(newPostData);
	// 	this.setState(state => ({
	// 		posts: [...state.posts, newPost] 
	// 	}),() => this.props.history.push('/'));
	// } 
	

	render() {
		const { user, userProfile } = this.state
		return (
			<>
				<NavBar user={this.state.user} />
				<Route exact path='/'>
          <Landing user={user} />
        </Route>
				<Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
				<Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				<Route exact path="/users" render={() =>
					authService.getUser() ?
					<ProfileList 
						userProfile={userProfile}
						// Pass the functions as props to this component
						handleFriend={this.handleFriend}
					/> : <Redirect to="/login" />
				}/>
				<Route exact path="/profile" render={({ location }) =>
					authService.getUser() ?
					<ProfileDetails 
						userProfile={userProfile}
						location={location}
					/> : <Redirect to="/login" />
				}/>
			<Route exact path='/posts'>
				<PostList />
			</Route>
			<Route exact path='/Add'>
				<AddPost/>
			</Route>
			<Route exact path='/post'
			render={({location}) =>
			<PostDetails location = {Location}
			/>
			}
			/>	
			</>
		)
	}
}

export default App
