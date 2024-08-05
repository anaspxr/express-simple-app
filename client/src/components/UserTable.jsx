import { useEffect, useState } from "react";
import UserView from "./UserView";
import UserEdit from "./UserEdit";

function UserTable() {
  const [editOpen, setEditOpen] = useState(false);
  const [usersData, setUsersData] = useState(null);
  const [error, setError] = useState(null);
  const [userViewData, setUserViewData] = useState(null);

  const handleView = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserViewData(data))
      .catch((err) => console.log(err));
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
      {userViewData && (
        <UserView userData={userViewData} setEditOpen={setEditOpen} />
      )}
      {editOpen && (
        <UserEdit userData={userViewData} setEditOpen={setEditOpen} />
      )}
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
