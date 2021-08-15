import React, { Component } from 'react';

class PostForm extends Component {
  state = { 
    invalidForm:true,
    FormData:{
      
    }
   }

  formRef = React.createRef();
  render() { 
    return (
       <>

        <form action="">
          <textarea type="text" name="test"/>
          <button
          >
            Submit Post
          </button>
        </form>
      </>
     );
  }
}
 
export default PostForm;