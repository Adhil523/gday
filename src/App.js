import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
// import Partners from "./components/Partners";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Landing/>
      <Info/>
      <Speakers/>
      {/* <Partners/> */}
      <Faq/>
      <Footer/>
    </div>

  );
}

export default App;
