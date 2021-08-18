import React from 'react'

const ReplyCard = ({reply,deleteReply,userProfile}) => {
  return (
    <div>
      <h3>{reply.author.name}</h3>
      <p>{reply.content}</p>
      <p>at {reply.createdAt}</p>
      {reply.author._id===userProfile._id&&<button onClick={()=>deleteReply(reply._id)}>X</button>}
    </div>
  )
}

export default ReplyCard
