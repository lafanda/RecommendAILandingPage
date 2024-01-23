import React from 'react';
import Nav from './components/layout/Nav';
import DownloadButton from "./components/reusables/DownloadButton";
import Forum from './components/testMe/Forum';
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


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
