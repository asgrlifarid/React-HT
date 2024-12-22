import { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Major from "./components/Major";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Job from "./components/Job";
import Abilities from "./components/Abilities";


function App() {
  

  return (
    <>
      <Header />
      <Major />
   <Job/>
   <Abilities/>

      <Address />

      <Footer />
    </>
  );
}

export default App;
