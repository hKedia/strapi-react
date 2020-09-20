import React, { useEffect, useState, useContext } from "react";

import Post from "../components/Post.js";
import { UserContext } from "../context/UserContext.js";

export default ({ match, history }) => {
  const { id } = match.params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    const getPost = async (postId) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/posts/${postId}`
        );
        const data = await response.json();
        setLoading(false);

        setPost(data);
      } catch (err) {
        setLoading(false);
        setError("Post Not Found");
      }
    };

    getPost(id);
  }, []);

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    history.push("/");
  };

  return (
    <div className="single-post">
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <>
          <Post post={post} />
          <button onClick={handleDelete}>Delete This Post</button>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
