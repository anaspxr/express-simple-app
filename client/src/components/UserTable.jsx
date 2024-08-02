const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    username: "mikejohnson",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    username: "emilydavis",
  },
];

function UserTable({ users }) {
  const handleView = (id) => {
    // handle view logic
    console.log("View user", id);
  };

  const handleEdit = (id) => {
    // handle edit logic
    console.log("Edit user", id);
  };

  const handleDelete = (id) => {
    // handle delete logic
    console.log("Delete user", id);
  };
  return (
    <div className="user-table-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn view-btn"
                  onClick={() => handleView(user.id)}
                >
                  View
                </button>
                <button
                  className="btn edit-btn"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
