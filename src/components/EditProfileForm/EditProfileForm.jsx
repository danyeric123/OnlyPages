import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

class EditProfileForm extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
    password: '',
    passwordConf: '',
  }

  handleChange = e => {
    this.props.updateMessage('')
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  //change this from authService.signup to edit?
  handleSubmit = async e => {
    const { history, updateMessage } = this.props
    e.preventDefault()
    try {
      await authService.signup(this.state)
      history.push('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state
    return !(name && email && password === passwordConf)
  }

  render() {
    const { name, email, avatar, password, passwordConf } = this.state
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="avatar" className={styles.label}>
            Avatar Image
          </label>
          <input
            type="text"
            autoComplete="off"
            id="avatar"
            value={avatar}
            name="avatar"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className={styles.label}>Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <button disabled={this.isFormInvalid()} className={styles.button}>Sign Up</button>
          <Link to="/profile">
            <button>SUBMIT</button>
          </Link>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default EditProfileForm