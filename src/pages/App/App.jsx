import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Landing from "../Landing/Landing";
import * as authService from "../../services/authService";
import ProfileList from "../ProfileList/ProfileList";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import * as profileAPI from "../../services/profileService";
import BookSearch from "../BookSearch/BookSearch";
import BookDetails from "../BookDetails/BookDetails";
import PostDetails from "../PostDetails/PostDetails";
import PostLanding from "../PostLanding/PostLanding";
import PostUpdate from "../PostUpdate/PostUpdate";
import EditProfileForm from '../EditProfileForm/EditProfileForm'
import PostList from "../../components/PostList/PostList";
import PostCategory from "../../components/PostCategory/PostCategory";
// import * as bookAPI from '../../services/bookService
import "tailwindcss/tailwind.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    userProfile: null,
  };

  async componentDidMount() {
    if (!this.state.userProfile && this.state.user) {
      const userProfile = await profileAPI.getUserProfile();
      this.setState({ userProfile });
    }
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null, userProfile: null });
    console.log(this.state);
    this.props.history.push("/");
  };

  handleSignupOrLogin = async () => {
    this.setState({
      user: await authService.getUser(),
      userProfile: await profileAPI.getUserProfile(),
    });
  };

  updateUserProfile = async (update) => {
    const newUser = await profileAPI.update(this.state.userProfile._id, update);
    this.setState({ userProfile: newUser.profile, user: newUser.user });
  };

  handleFriend = async (friendId) => {
    const updatedProfile = await profileAPI.friendAndUnfriend(friendId);
    this.setState({ userProfile: updatedProfile });
  };

  handleAddBook = async (book, collection) => {
    const updatedProfile = await profileAPI.addBook(book, collection);
    this.setState({ userProfile: updatedProfile });
  };

  handleRemoveBook = async (api_id, collection) => {
    const updatedProfile = await profileAPI.removeBook(api_id, collection);
    this.setState({ userProfile: updatedProfile });
  };

  render() {
    const { user, userProfile } = this.state;
    return (
      <>
        <NavBar
          user={user}
          userProfile={userProfile}
          history={this.props.history}
          handleLogout={this.handleLogout}
        />

        <Route exact path="/">
          <Landing user={userProfile} />
        </Route>
        <Route exact path="/signup">
          <Signup
            history={this.props.history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        </Route>
        <Route
          exact
          path="/users"
          render={() =>
            authService.getUser() ? (
              <ProfileList
                userProfile={userProfile}
                // Pass the functions as props to this component
                handleFriend={this.handleFriend}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route exact path="/login">
          <Login
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={this.props.history}
          />
        </Route>

        <Route exact path="/profile/edit" render={({ location }) =>
					authService.getUser() ?
					<EditProfileForm
						userProfile={userProfile}
						user={user}
            history={this.props.history}
						updateUserProfile={this.updateUserProfile}
          />: (
              <Redirect to="/login" />
            )
          }/>

        <Route
          exact
          path="/profiles/:id"
          render={({ location }) =>
            authService.getUser() ? (
              <ProfileDetails userProfile={userProfile} location={location} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/search/:query"
          render={({ match }) =>
            authService.getUser() ? (
              <BookSearch
                match={match}
                userProfile={userProfile}
                handleAddBook={this.handleAddBook}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/books/:id"
          render={({ match }) =>
            authService.getUser() ? (
              <BookDetails
                match={match}
                userProfile={userProfile}
                handleAddBook={this.handleAddBook}
                handleRemoveBook={this.handleRemoveBook}
                handleSelect={this.handleSelect}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route exact path="/posts">
          <PostLanding userProfile={userProfile} />
        </Route>
        <Route exact path="/posts/category/:categoryName">
          <PostCategory userProfile={userProfile} />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetails userProfile={userProfile} />
        </Route>
        <Route exact path="/edit">
          <PostUpdate />
        </Route>
      </>
    );
  }
}

export default App;
