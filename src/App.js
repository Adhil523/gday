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
  const [colour,setColour]=useState(false)
  const [ani,setAni]=useState(false)

  const changeImage= ()=>{
    setImage(!image)
  }
  const changeText= ()=>{
    setText(!text)
  }

  const changeColour = ()=>{
    setColour(!colour)

  }
  const changeAni=()=>{
    setAni(!ani)
  }


  return (
    <div className="">
      <Navbar changeImage={changeImage} changeText={changeText} changeColour={changeColour} changeAni={changeAni}/>
      <Landing text={text} image={image} colour={colour}/>
      <Gdsc text={text} image={image} colour={colour} />
      <Info text={text} image={image} colour={colour}/>
      <Speakers text={text} image={image} colour={colour} ani={ani}/>
      {/* <Partners/> */}
      <Faq text={text} image={image}/>
      <Footer/>
    </div>

  );
}

export default App;
