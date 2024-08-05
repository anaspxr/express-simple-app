export default function UserView({ userData, setEditOpen }) {
  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <div className="user-container">
      <p>id:{userData.id}</p>
      <p>Username: {userData.username}</p>
      <p>Email:{userData.email}</p>
      <p>Name:{userData.name}</p>
      <div>
        <button
          className="btn edit-btn"
          onClick={() => setEditOpen((prev) => !prev)}
        >
          Edit/ Cancel
        </button>
        <button
          className="btn delete-btn"
          onClick={() => handleDelete(userData.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
