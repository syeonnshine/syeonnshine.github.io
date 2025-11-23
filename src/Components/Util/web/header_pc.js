import '../../css/main.css';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }

  const [isOpen, setOpen] = useState(false);
    return (
      <header>
        <Desktop>
          <div className="header_pc">
            <h1 onClick={goHome}>SIYEON</h1>
            <nav>
                <ul className='nav'>
                    <li>about</li>
                    <li>skills</li>
                    <li>project</li>
                    <li>career</li>
                </ul>
            </nav>
          </div>
        </Desktop>
        <Tablet>  
          <div className='header-mobile'>
            <h1 onClick={goHome}>SIYEON</h1>
              <div
                onClick={() => setOpen(!isOpen)}
                className={`menu-button ${isOpen ? "open" : "close"}`}>
                  <MenuIcon className='btn btn-menu'/>
                  <CloseIcon className='btn btn-close'/>
                </div>
              <div className={`nav ${isOpen ? "open" : "close"}`}>
                  <ul>
                    <li>
                      about
                    </li>
                    <li>
                      skills
                    </li>
                    <li>
                      project
                    </li>
                    <li>
                      career
                    </li>
                  </ul>
              </div>
          </div>
        </Tablet>
        <Mobile>
        <div className='header-mobile'>
            <h1 onClick={goHome}>SIYEON</h1>
              <div
                onClick={() => setOpen(!isOpen)}
                className={`menu-button ${isOpen ? "open" : "close"}`}>
                  <MenuIcon className='btn btn-menu'/>
                  <CloseIcon className='btn btn-close'/>
                </div>
              <div className={`nav ${isOpen ? "open" : "close"}`}>
                  <ul>
                    <li>
                      about
                    </li>
                    <li>
                      skills
                    </li>
                    <li>
                      project
                    </li>
                    <li>
                      career
                    </li>
                  </ul>
              </div>
          </div>
        </Mobile>
      </header>
    );
  }

  export default Header;