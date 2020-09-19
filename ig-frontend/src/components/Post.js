import React from "react";

export default ({ post }) => {
  const url = post.image && post.image.url;
  const { description, likes } = post;

  const formatImageUrl = (url) => `${process.env.REACT_APP_API_URL}${url}`;

  return (
    <div className="post">
      <h4>{description}</h4>
      <img className="post__image" src={formatImageUrl(url)} alt="" />
      <div>Likes: {likes}</div>
    </div>
  );
};
