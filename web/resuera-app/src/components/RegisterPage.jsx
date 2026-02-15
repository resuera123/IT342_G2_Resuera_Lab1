import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const RegisterPage = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Registration successful!");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="First Name" onChange={e => setForm({...form, userFirstName: e.target.value})} />
        <input placeholder="Last Name" onChange={e => setForm({...form, userLastName: e.target.value})} />
        <input type="email" placeholder="Email" onChange={e => setForm({...form, userEmail: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={e => setForm({...form, userPassword: e.target.value})} required />
        <button type="submit">Register</button>
        <p onClick={() => navigate("/")}>Already have an account? Login</p>
      </form>
    </div>
  );
};

export default RegisterPage;