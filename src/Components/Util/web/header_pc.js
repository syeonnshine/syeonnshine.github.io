import '../../css/main.css';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  }
    return (
      <header>
        <div className="header_pc">
          <h1 onClick={goHome}>SIYEON</h1>
          <nav>
              <ul className='nav'>
                  <li>about</li>
                  <li>stack</li>
                  <li>project</li>
                  <li>career</li>
              </ul>
          </nav>
        </div>
      </header>
    );
  }

  export default Header;