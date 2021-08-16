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
<<<<<<< HEAD
import PostList from '../PostList/PostList'
import AddPost from '../AddPost/AddPost'
import PostDetails from '../PostDetails/PostDetails'
import BookDetails from '../BookDetails/BookDetails'
=======
import BookSearch from "../BookSearch/BookSearch";
import BookDetails from '../BookDetails/BookDetails'
import * as bookAPI from '../../services/bookService'

>>>>>>> 03f939adcb77f1fdd5d1d278f94c113afd6efdb2
class App extends Component {
	state = {
    user: authService.getUser(),
    userProfile: null
  }

	handleLogout = () => {
    authService.logout();
    this.setState({ user: null, userProfile: null });
		console.log(this.state)
    this.props.history.push("/");
  };

	async componentDidMount() {
    if (!this.state.userProfile) {
      const userProfile = await profileAPI.getUserProfile()
      this.setState({userProfile})
    }
  }

  handleSignupOrLogin = async () => {
    this.setState({ user: await authService.getUser(), userProfile: await profileAPI.getUserProfile()});
  };

	handleFriend = async (friendId) => {
    const updatedProfile = await profileAPI.friendAndUnfriend(friendId)
    this.setState({userProfile: updatedProfile})
  }

<<<<<<< HEAD
	// handleAddPost = async newPostData => {
	// 	const newPost = await postAPI.create(newPostData);
	// 	this.setState(state => ({
	// 		posts: [...state.posts, newPost] 
	// 	}),() => this.props.history.push('/'));
	// } 
	
=======
	handleAddBook = async (book,collection) => {
    const updatedProfile = await profileAPI.addBook(book,collection)
    this.setState({userProfile: updatedProfile})
  }

  handleRemoveBook = async (api_id,collection)=> {
    const updatedProfile = await profileAPI.removeBook(api_id,collection)
    this.setState({userProfile: updatedProfile})
  }
>>>>>>> 03f939adcb77f1fdd5d1d278f94c113afd6efdb2

	render() {
		const { user, userProfile } = this.state
		return (
			<>
				<NavBar user={user} userProfile={userProfile} history={this.props.history} handleLogout={this.handleLogout} />
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
<<<<<<< HEAD
			<Route exact path='/posts'>
				<PostList />
			</Route>
			<Route exact path='/Add' render={()=>
				<AddPost
				handleAddPost = {this.handleAddPost}
				/>
			}>
			</Route>
			<Route exact path='/posts/:id'
			render={({location}) =>
			<PostDetails location = {Location}
			/>
			}
			/>	
=======
			 <Route
          exact
          path="/search/:query"
          render={({ match }) =>
            authService.getUser() ? (
              <BookSearch
                match={match}
                userProfile={userProfile}
                handleAddBook={this.handleAddBook}
                handleRemoveBook={this.handleRemoveBook}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
>>>>>>> 03f939adcb77f1fdd5d1d278f94c113afd6efdb2
				<Route exact path='/books/:id' render={({ match }) => 
          authService.getUser() ?
            <BookDetails 
              match={match}
              userProfile={userProfile}
							handleAddBook={this.handleAddBook}
							handleRemoveMedia={this.handleRemoveBook}
            /> : <Redirect to='/login' />
        }/>
			</>
		)
	}
}

export default App
