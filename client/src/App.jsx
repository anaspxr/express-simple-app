import UserTable from "./components/UserTable";
import "./App.css";
import { useState } from "react";
import UserCreationForm from "./components/UserCreateForm";
function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div className="main">
      {formOpen && <UserCreationForm />}
      <button className="create-bt" onClick={() => setFormOpen(!formOpen)}>
        {formOpen ? "Cancel" : "Create new User"}
      </button>

      <div>
        <UserTable />
      </div>
    </div>
  );
}

export default App;
