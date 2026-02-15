import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail, userPassword }),
    });

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate("/register")}>Create an account</p>
    </div>
  );
};

export default LoginPage;