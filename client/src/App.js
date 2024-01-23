import React from 'react';
import Nav from './components/layout/Nav';
import DownloadButton from "./components/reusables/DownloadButton";
import Forum from './components/testMe/Forum';

function App() {
  return (
    <div >
      <Nav/>
      <Forum/>
      <DownloadButton brand = 'google-play'/>
        <DownloadButton brand = 'apple'/>
    </div>
  );
}

export default App;
