import { useState } from "react";

export default function UserEdit({ userData }) {
  const [values, setValues] = useState(userData);
  const handleChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${userData.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="edit-field">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="edit-field">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <button className="edit-btn btn" type="submit">
          Update User
        </button>
      </form>
    </div>
  );
}
