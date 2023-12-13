
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './Components/Util/web/header_pc';
import Main from './Components/Util/web/main';
import About from './Components/About/web/about';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BrowserView>
          <Header/>
          <Main/>
          <About/>
        </BrowserView>
      </BrowserRouter>
      <MobileView>Mobile</MobileView>
    </div>
  );
}

export default App;
