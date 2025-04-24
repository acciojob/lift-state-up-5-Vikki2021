import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (username.trim() && password.trim()) {
      onLogin(); 
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "inline-block", textAlign: "left" }}
    >
      <div>
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
