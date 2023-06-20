import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Main/>
    </div>
  );
}

export default App;
