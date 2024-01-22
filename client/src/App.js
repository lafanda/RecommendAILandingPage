import React from 'react';
import NavBar from './components/layout/NavBar';
import DownloadButton from "./components/reusables/DownloadButton";


function App() {
  return (
    <div >
      <DownloadButton brand = 'google-play'/>
        <DownloadButton brand = 'apple'/>
    </div>
  );
}

export default App;
