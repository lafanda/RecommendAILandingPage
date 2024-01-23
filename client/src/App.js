import React from 'react';
import Nav from './components/layout/Nav';
import Forum from './components/testMe/Forum';
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <div >
         <Nav/>
         <Welcome/>
         <Forum/>
         <Footer/>
    </div>
  );
}

export default App;
