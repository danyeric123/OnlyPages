import moment from 'moment'
import React from 'react'

const ReplyCard = ({reply,deleteReply,userProfile}) => {
  
  return (
    <div>
      <h3>{reply.author.name}</h3>
      <p>{reply.content}</p>
      <small>Replied on {moment(reply.createdAt).fromNow()}</small>
      <br/>
      {reply.author._id===userProfile._id&&<button onClick={()=>deleteReply(reply._id)}>delete</button>}
    </div>
  )
}

export default ReplyCard
