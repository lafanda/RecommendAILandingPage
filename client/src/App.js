import React from 'react';
import Nav from './components/layout/Nav';
import Forum from './components/testMe/Forum';
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";
import Phones from "./components/phones/Phones";


function App() {
  return (
    <div >
         <Nav/>
         <Welcome/>
         <Forum/>
        <Phones/>
         <Footer/>

    </div>
  );
}

export default App;
