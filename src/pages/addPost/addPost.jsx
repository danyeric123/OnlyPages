import { useState } from 'react';
import { Link } from 'react-router-dom'

const AddPost = ({addPost}) => {
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [categories, setCategories] = useState([])

 const handleSubmit = (e) =>{
   e.preventDefault();
   const post ={ title, body,categories};
   setBody('')
   setTitle('')
   setCategories([])
   addPost(post)
 }


 

  return (
    <div className="addpost">
      <h2>Write a post</h2>
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
      <button>submit post</button>
      <Link to="/">
       <button>cancel</button>
     </Link>
      </form>
    </div>
  );
}

export default AddPost;