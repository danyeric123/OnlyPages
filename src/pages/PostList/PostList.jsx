import React, { Component } from 'react'
import PostCard from '../../components/PostCard/PostCard'

class PostList extends Component {
  
  state={
    posts: ['post1','post2','post3',]
  }
  render(){
    return(
      <>
      <h1>Recent Post</h1>
      {this.state.posts.map(post =>
        <PostCard/>
        )}
      </>
    )
  }
}

export default PostList;