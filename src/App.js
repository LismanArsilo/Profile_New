import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <div>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
