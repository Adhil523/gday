import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Speakers from "./components/Speakers";
import Speakers2 from "./components/Speakers2";
import Speakers3 from "./components/Speakers3";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Info/>
      <Speakers/>
      <Speakers2/>
      <Speakers3/>
      {/* <Footer/> */}
    </div>

  );
}

export default App;
