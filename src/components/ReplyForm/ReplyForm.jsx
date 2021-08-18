import React, {useState} from 'react'

const ReplyForm = ({addReply}) => {

  const [content, setContent] = useState(''); 

  const handleSubmit = (e) =>{
    e.preventDefault();
    submitReply()
  }

  const submitReply = ()=>{
    setContent('')
    addReply({content})
  }

  const handleEnter = (e)=>{
    if(e.key === 'Enter'){
      submitReply()
    }
  }

  return (
    <>
      <h2>Write a reply</h2>
      <form onSubmit={handleSubmit}>
          <textarea
          onKeyDown={handleEnter}
          required
          id="body"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ></textarea>
        <button>Reply</button>
      </form>
    </>
  )
}

export default ReplyForm
