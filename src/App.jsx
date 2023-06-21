import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Services from "./components/Services";
import Featured from "./components/Featured";
import ImgText from "./components/ImgText";
import Blog from "./components/Blog";
import CustomerExp from "./components/CustomerExp";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Main/>
      <Services/>
      <Featured/>
      <ImgText/>
      <Blog/>
      <CustomerExp/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
