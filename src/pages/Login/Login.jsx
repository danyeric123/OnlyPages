import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

class LoginPage extends Component {
  render() {
    return (
      <main className={styles.container}>
        <h1>Log In</h1>
        <LoginForm history={this.props.history}/>
      </main>
    )
  }
}

export default LoginPage
