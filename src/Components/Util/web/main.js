import { useMediaQuery } from 'react-responsive'
import Main_bg from "../../../images/main_bg.jpg"
import Main_bg_t from "../../../images/main_bg_m.jpg"
import Main_bg_s from "../../../images/main_bg_s.jpg"

function Main() {
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

      return (
        <div className="main_wrap">
            <div className="main_bg">
               <Desktop><img src={Main_bg}></img></Desktop> 
                <Tablet><img src={Main_bg_t}></img></Tablet>
                <div className='main_mobile'>
                 <Mobile><img src={Main_bg_s}></img></Mobile>
                </div>
            </div>
        </div>
      );
    }
  
    export default Main;