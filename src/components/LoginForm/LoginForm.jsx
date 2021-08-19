import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

class LoginForm extends Component {
  state = {
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    const { history, handleSignupOrLogin } = this.props
    e.preventDefault()
    console.log(this.props)
    try {
      await authService.login(this.state);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
      console.log(err)
        alert('Invalid Credentials')
    }
  }

  render() {
    const { email, pw } = this.state
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
                Email
              </label>
          <input
            type="text"
            autoComplete="email"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div>
          <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Log In</button>
          <Link to="/">
            <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-2">Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default LoginForm
