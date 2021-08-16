import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as authService from '../../services/authService'


class PostForm extends Component {
    state = {
      message: '',
    }
    formRef = React.createRef();

    handleChange = e => {
    this.props.updateMessage('')
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

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

   render() { 
      return (
        <>
        <h1>create post</h1>
        <form>
       
        <br></br>
        <input/>
        <br></br>
        <textarea/>

        submit post
        </form>
        </>
     );
    
    }

}
export default PostForm;