import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./SignupForm.module.css";
import * as authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    avatar: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="mt-8 space-y-6"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              value={name}
              name="name"
              onChange={this.handleChange}
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Preferred Name"
            />
          </div>
        </div>

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
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Your preferred email address"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Strong password"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Confirm password"
          />
        </div>
        <div>
          <button
            className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-2"
            disabled={!(name && email && password === passwordConf)}
          >
            Sign Up
          </button>
          <Link to="/">
            <button className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

export default SignupForm;
