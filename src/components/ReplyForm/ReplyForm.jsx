import React, {useState} from 'react'

const ReplyForm = ({addReply}) => {

  const [content, setContent] = useState(''); 

  const handleSubmit = (e) =>{
    e.preventDefault();
    addReply({content})
  }

  return (
    <>
      <h2>Write a reply</h2>
      <form onSubmit={handleSubmit}>
          <textarea
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
