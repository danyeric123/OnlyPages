import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.css";
import { FaBook } from "react-icons/fa";

class LoginPage extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          
          <img
              src="https://i.imgur.com/ZnXPhEq.jpg"
              alt="only pages open book logo"
              className="rounded-full h-20 w-20 mx-auto ring-4 ring-blue hover:opacity-75"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <LoginForm
            history={this.props.history}
            handleSignupOrLogin={this.props.handleSignupOrLogin}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;
