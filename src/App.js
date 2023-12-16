
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserRouter } from "react-router-dom";

import Header from './Components/Util/web/header_pc';
import Main from './Components/Util/web/main';
import About from './Components/About/web/about';
import Skiils from './Components/Skill/skill';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
          <Header/>
          <Main/>
          <About/>
          <Skiils/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
