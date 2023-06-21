import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Services from "./components/Services";
import Featured from "./components/Featured";
import ImgText from "./components/ImgText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Main/>
      <Services/>
      <Featured/>
      <ImgText/>
    </div>
  );
}

export default App;
