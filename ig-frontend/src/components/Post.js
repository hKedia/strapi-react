import React from "react";
import { Link } from "react-router-dom";

export default ({ post }) => {
  const url = post.image && post.image.url;
  const { description, likes } = post;

  const formatImageUrl = (url) => `${process.env.REACT_APP_API_URL}${url}`;

  return (
    <div className="post">
      <Link to={`/${post.id}`}>
        <h4>{description}</h4>
      </Link>
      <img className="post__image" src={formatImageUrl(url)} alt="" />
      <div>Likes: {likes}</div>
    </div>
  );
};
