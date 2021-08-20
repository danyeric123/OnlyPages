import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
// import styles from './EditProfileForm.module.css'

const EditProfileForm = ({userProfile,user,updateUserProfile,history}) => {
  const [name, setName] = useState(userProfile.name)
  const [email, setEmail] = useState(user.email)
  const [avatar, setAvatar] = useState(userProfile.avatar)
  const [validForm, setValidForm] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      history.push(`/profiles/${userProfile._id}`)
      updateUserProfile({name,email,avatar})
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        
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
            onChange={({target})=>setName(target.value)}
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
            onChange={({target})=>setAvatar(target.value)}
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
            onChange={({target})=>setEmail(target.value)}
          />
        </div>
        <div >
            <button disabled={validForm} >SUBMIT</button>
          <Link to={`/profiles/${userProfile._id}`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default EditProfileForm