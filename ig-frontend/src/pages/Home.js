import React, { useEffect, useState } from "react";

import Post from "../components/Post.js";

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="home">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
