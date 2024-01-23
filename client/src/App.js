import React from 'react';
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


function App() {
  return (
    <div >
        <Nav/>
         <Welcome/>
        <Footer/>

    </div>
  );
}

export default App;
