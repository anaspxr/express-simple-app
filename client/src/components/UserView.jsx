export default function UserView({ userData }) {
  const handleEdit = (id) => {
    // handle edit logic
    console.log("Edit user", id);
  };

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
          onClick={() => handleEdit(userData.id)}
        >
          Edit
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
