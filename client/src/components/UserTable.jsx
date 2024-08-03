import { useEffect, useState } from "react";

function UserTable() {
  const [usersData, setUsersData] = useState(null);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data))
      .catch((err) => setError(err));
  }, []);

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
          {usersData?.map((user, index) => (
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
        {error && <p className="p-error">Error while fetching data..</p>}
      </table>
    </div>
  );
}

export default UserTable;
