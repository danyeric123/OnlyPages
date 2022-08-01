import { useState, useEffect } from "react";
import PostList from "../../components/PostList/PostList";
import * as postAPI from "../../services/postService.js";
import { useParams } from "react-router-dom";

const PostCategory = ({ userProfile }) => {
  const category = useParams().categoryName;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("use effect ran");
    async function getPosts() {
      const posts = await postAPI.getCategory(category);
      setPosts(posts);
      setIsLoading(false);
      console.log(category);
    }

    getPosts();
  }, [category]);

  async function handleDeletePost(id) {
    const posts = await postAPI.deleteOne(id);
    setPosts(posts);
  }

  return (
    <>
      {isLoading && <div>...loading</div>}
      {posts && (
        <PostList
          posts={posts}
          title={category}
          handleDelete={handleDeletePost}
          userProfile={userProfile}
        />
      )}
    </>
  );
};

export default PostCategory;
