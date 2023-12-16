import '../css/skill.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

// images
import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Js from '../../images/js.png';
import Jquery from '../../images/jquery.png';
import React from '../../images/react.png';

import Java from '../../images/java.png';
import Jsp from '../../images/jsp.png';
import Spring from '../../images/spring.png';
import Springboot from '../../images/springboot.png';

import Mysql from '../../images/mysql.png';
import Sql from '../../images/sql.png';
import Postgre from '../../images/postgre.png';
import Tomcat from '../../images/tomcat.png';

import Gitlab from '../../images/gitlab.png';
import Github from '../../images/github.png';
import Slack from '../../images/slack.png';
import Figma from '../../images/figma.png';

function Header() {
  const navigate = useNavigate();
  
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

  
    return (
        <Desktop>
            <div className='skills-wrap'>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
                }}>
                    <h3 className='menu-title'>SKILLS</h3>
                </motion.div> 
                <div class="cards">
                    <div class="card front">
                        <p class="tip">Frontend</p>
                        {/* <p class="second-text">Hover me</p> */}
                        <div className='skill-img'>
                            <img src={Html}/>
                            <img src={Css}/>
                            <img src={Js}/>
                            <img src={Jquery}/>
                            <img src={React}/>
                        </div>
                    </div>
                    <div class="card back">
                        <p class="tip">Backend</p>
                        <div className='skill-img'>
                            <img src={Java}/>
                            <img src={Jsp}/>
                            <img src={Spring}/>
                            <img src={Springboot}/>
                    
                        </div>
                    </div>
                    <div class="card database&server">
                        <p class="tip">Database & Server</p>
                        <div className='skill-img'>
                            <img src={Mysql}/>
                            <img src={Sql}/>
                            <img src={Postgre}/>
                            <img src={Tomcat}/>                    
                       </div>
                    </div>
                    <div class="card etc">
                        <p class="tip">Etc</p>
                        <div className='skill-img'>
                            <img src={Github}/>
                            <img src={Gitlab}/>
                            <img src={Slack}/>
                            <img src={Figma}/>                    
                       </div>
                    </div>
                </div> 
            </div>
        </Desktop>
    );
  }

  export default Header;