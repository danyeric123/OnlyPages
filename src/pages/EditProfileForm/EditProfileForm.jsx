import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
// import styles from './EditProfileForm.module.css'
import * as profileService from "../../services/profileService";

class EditProfileForm extends Component {
  state = {
    name: this.props.userProfile.name,
    email: this.props.user.email,
    avatar: this.props.userProfile.avatar,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      this.props.updateUserProfile(this.state);
      this.props.history.push(`/profiles/${this.props.userProfile._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  isFormInvalid() {
    const { name, email } = this.state;
    return !(name && email);
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
}

export default EditProfileForm;
