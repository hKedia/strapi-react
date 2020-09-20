import React, { useState, useContext, useEffect } from "react";

import { UserContext } from "../context/UserContext.js";

export default ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      if (data.message) {
        setError(data.message[0].messages[0].message);
        return;
      }
      console.log("data", data);
      setUser(data);
    } catch (err) {
      setError("Something went wrong", err);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
