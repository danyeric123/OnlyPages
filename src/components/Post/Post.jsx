// s.1 import react 
import { render } from "@testing-library/react"
import React, { Component } from "react"
// s.2 import react-router
import { Link } from "react-router-dom"


class Post extends Component{
  
  state={
    count:0
  }

  

  handleChange = e => {
    this.props.updatePost('')
    this.setState({
      [e.target.post]: e.target.value,
    })
  }
  
  handleSubmit = async e => {
    // const { history, updatePost } = this.props
    // e.preventDefault()
    // try {
    //   await authService.signup(this.state)
    //   history.push('/')
    // } catch (err) {
    //   updatePost(err.message)
    // }
  }

// s.3.2 render Post /sanity check
render(){
  return(
    <form>
      <div> 
        <img src="https://www.placecage.com/c/200/300" alt="" />
      </div>
      <div> 
        <textarea input="">title</textarea>
      </div>
     <textarea input="">

     </textarea>
       <button type='Submit' value="Submit">submit</button>
       <button type='like' value="like">like</button>
       <button type='dislike'
       className='dec' onClick={this.decrement}
       value="dislike">dislike</button>
       <button type='edit' value="edit">edit</button>
       <button type='reply' value="reply">reply</button>
       <button type='delete
       ' value="delete
       ">delete
       </button>
      </form>
    )
    }
  }


//s.4 export Post
export default Post