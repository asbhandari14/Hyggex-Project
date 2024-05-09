import React from "react";
import './App.css'
import Navbar from "./Components/Navbar";
import Breadcrum from "./Components/Breadcrum";
import PageHeading from "./Components/PageHeading";
import Main from "./Components/Main";
import PublishedBy from "./Components/PublishedBy";
import FAQ from "./Components/FAQ";



const App=()=>{

  return(
    <>
      <Navbar/>
      <Breadcrum/>
      <PageHeading/>
      <Main/>
      <PublishedBy/>
      <FAQ/>
    </>
  )
}

export default App;
