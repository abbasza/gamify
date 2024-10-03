import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Form from "./components/Form";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <Form />
    </div>
  );
}
export default App;
