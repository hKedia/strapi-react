import React, { useState, useContext } from "react";

import { UserContext } from "../context/UserContext.js";

export default () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description) {
      setError("Please enter a description");
      return;
    }

    if (!file) {
      setError("Please upload an image");
      return;
    }

    const formData = new FormData();

    formData.append("data", JSON.stringify({ description }));
    formData.append("files.image", file);

    try {
      await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
        body: formData,
      });
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="create">
      <h2>Create Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form__group">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
