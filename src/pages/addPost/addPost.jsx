import { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm'
import * as postAPI from '../../services/postService.js'

const AddPost = () => {
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState([])

 const handleSubmit = (e) =>{
   e.preventDefault();
   const post ={ title, body, author, categories};
   postAPI.create(post)
   console.log(post);
 }


 

  return (
    <div className="addpost">
      <h2>add a post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Post title</label>
        <input type=
        "text"
        required
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="Categories">Categories</label>
        <input type=
        "text"
        required
        id="Categories"
        value={categories}
        placeholder="list categories with semicolon"
        onChange={(e) => setCategories(e.target.value.split(";"))}
        />
        <label htmlFor="body">Post body</label>
        <textarea
        required
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">post author</label>
        <input type=
        "text"
        id="author"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
      <button>submit post</button>
      <p>{ title }</p>
      <p>{ body }</p>
      <p>{ author }</p>
      </form>
    </div>
  );
}

export default AddPost;