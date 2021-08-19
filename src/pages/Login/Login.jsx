import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import { FaBook } from "react-icons/fa";

class LoginPage extends Component {
  render() {
    return (
      <main className={styles.container}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
           <FaBook
              size={30}
              style={{ color: "blue" }}
              className="mx-auto h-12 w-auto"
            />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            </p>
            </div>
        <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin} />
            </div>
            </div>
      </main>
    )
  }
}

export default LoginPage
