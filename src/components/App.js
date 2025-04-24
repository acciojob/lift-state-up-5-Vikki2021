import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to be passed to child to update state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
