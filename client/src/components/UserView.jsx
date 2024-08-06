export default function UserView({ userData, setEditOpen, editOpen }) {
  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <div className="user-container">
      <p>id:{userData._id}</p>
      <p>Username: {userData.username}</p>
      <p>Email:{userData.email}</p>
      <p>Name:{userData.name}</p>
      <p>Age:{userData.age || <span className="no-record">No Record</span>}</p>
      <p>
        State:
        {userData.address?.state || (
          <span className="no-record">No Record</span>
        )}
      </p>
      <p>
        City:
        {userData.address?.city || <span className="no-record">No Record</span>}
      </p>
      <div>
        Hobbies:{" "}
        {userData.hobbies.length === 0 && (
          <span className="no-record">No Record</span>
        )}
        <ul>
          {userData.hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>{" "}
      </div>
      <div>
        <button
          className="btn edit-btn"
          onClick={() => setEditOpen((prev) => !prev)}
        >
          {editOpen ? "Cancel" : "Edit User"}
        </button>
        <button
          className="btn delete-btn"
          onClick={() => handleDelete(userData._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
