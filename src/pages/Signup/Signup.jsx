import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import styles from "./Signup.module.css";
import { FaBook } from "react-icons/fa";

class Signup extends Component {
  state = {
    message: "",
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
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
              Sign up for an account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {this.state.message}
            </p>
            <SignupForm {...this.props} updateMessage={this.updateMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
