const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <h1>Profile</h1>
      <p><strong>Email:</strong> {user.userEmail}</p>
      <p><strong>Name:</strong> {user.userFirstName} {user.userLastName}</p>
      <button onClick={() => window.location.href = "/dashboard"}>Back to Dashboard</button>
    </div>
  );
};

export default Profile;