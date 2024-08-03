import { useEffect, useState } from "react";
import UserView from "./UserView";

function UserTable() {
  const [usersData, setUsersData] = useState(null);
  const [error, setError] = useState(null);
  const [userViewData, setUserViewData] = useState(null);
  const handleView = (id) => {
    // handle view logic
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserViewData(data))
      .catch((err) => console.log(err));
  };

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

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="user-table-container">
      {userViewData && <UserView userData={userViewData} />}
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
      </table>
      {error && <p className="p-error">Error while fetching data..</p>}
    </div>
  );
}

export default UserTable;
