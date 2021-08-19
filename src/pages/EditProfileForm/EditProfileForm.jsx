import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import styles from './EditProfileForm.module.css'
import * as profileService from '../../services/profileService'

class EditProfileForm extends Component {
  state = {
    name: this.props.userProfile.name,
    email: this.props.user.email,
    avatar: this.props.userProfile.avatar,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  handleSubmit = async e => {
    e.preventDefault()
    try {
      this.props.updateUserProfile(this.state)
      this.props.history.push(`/profiles/${this.props.userProfile._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  isFormInvalid() {
    const { name, email } = this.state
    return !(name && email )
  }

  render() {
    const { name, email, avatar} = this.state
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <div >
          <label htmlFor="name" >
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
        <div >
          <label htmlFor="avatar" >
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
        <div >
          <label htmlFor="email" >Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div >
            <button disabled={this.isFormInvalid()} >SUBMIT</button>
          <Link to={`/profiles/${this.props.userProfile._id}`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default EditProfileForm