import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/profile")}>View Profile</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;