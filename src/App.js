import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Info from "./components/Info";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Gdsc from "./components/Gdsc";
// import Partners from "./components/Partners";

function App() {

  const [text,setText]=useState(false)
  const [image,setImage]=useState(false)

  const changeImage= ()=>{
    setImage(!image)
  }
  const changeText= ()=>{
    setText(!text)
  }


  return (
    <div className="">
      <Navbar changeImage={changeImage} changeText={changeText}/>
      <Landing text={text} image={image}/>
      <Gdsc/>
      <Info text={text} image={image}/>
      <Speakers text={text} image={image}/>
      {/* <Partners/> */}
      <Faq text={text} image={image}/>
      <Footer/>
    </div>

  );
}

export default App;
