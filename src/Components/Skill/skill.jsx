import '../css/skill.css';
import {motion} from "framer-motion";
import * as React from 'react';
import {useState} from 'react';
import {styled} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from 'react-responsive';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// images
import Js from '/src/images/js.png';
import Jquery from '/src/images/jquery.png';
import ReactImg from '/src/images/react.svg';
import Vue from '/src/images/vue.png';

import Java from '/src/images/java.png';
import Jsp from '/src/images/jsp.png';
import Spring from '/src/images/spring.png';
import Springboot from '/src/images/springboot.png';

import Mysql from '/src/images/mysql.png';
import Sql from '/src/images/sql.png';
import Postgre from '/src/images/postgre.png';
import Tomcat from '/src/images/tomcat.png';

import Gitlab from '/src/images/gitlab.png';
import Github from '/src/images/github.png';
import Slack from '/src/images/slack.png';
import Figma from '/src/images/figma.png';

function Header() {


  const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992})
    return isDesktop ? children : null
  }
  const Tablet = ({children}) => {
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 991})
    return isTablet ? children : null
  }
  const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return isMobile ? children : null
  }
  const Default = ({children}) => {
    const isNotMobile = useMediaQuery({minWidth: 768})
    return isNotMobile ? children : null
  }

  const navigate = useNavigate();

  const [value, setValue] = useState('front');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  }

  const StyledTabs = styled((props) => (
    <Tabs
      TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan"/>}}
      {...props}
    />
  ))({
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: '#f5f5f5',
    },
    '& .MuiTabs-indicator': {
      justifyContent: 'center',
      backgroundColor: 'transparent',
      display: 'flex',
    },
  });
  const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
  ))(({theme}) => ({
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1.2rem',
    marginRight: theme.spacing(5),
    color: '#caddff',
    '&.Mui-selected': {
      color: '#f5f5f5',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#f5f5f5',
    },
  }));
  return (
    <Desktop>
      <div className='skills-wrap p-5'>
        {/*<motion.div*/}
        {/*initial={{ opacity: 0, scale: 0.5 }}*/}
        {/*animate={{ opacity: 1, scale: 1 }}*/}
        {/*transition={{*/}
        {/*ease: [0, 0.71, 0.2, 1.01],*/}
        {/*scale: {*/}
        {/*    type: "spring",*/}
        {/*    damping: 5,*/}
        {/*    stiffness: 100,*/}
        {/*    restDelta: 0.001*/}
        {/*}*/}
        {/*}}>*/}
        {/*    <h3 className='menu-title'>SKILLS</h3>*/}
        {/*</motion.div> */}
        {/*<div className="grid grid-cols-2 w-[70%] mx-auto gap-10">*/}
        <div>
          <StyledTabs value={value} onChange={handleChange} centered>
            <StyledTab label="FRONTEND" value={'front'}/>
            <StyledTab label="LIBRARY" value={'lib'}/>
            <StyledTab label="ETC" value={'etc'}/>
          </StyledTabs>
          <div className={' w-[30%] mx-auto my-10'}>
            <div className={'bg-[#F5F5F5] rounded-md shadow-lg shadow-black-500/50 p-4 w-full'}>
              {/*<img src={Html}/>*/}
              {/*<img src={Css}/>*/}
              <div value={'front'} style={{display: value === 'front' ? 'block' : 'none'}}>
                <div className={'flex justify-between'}>
                  <img src={Js}/>
                  <img src={Jquery}/>
                  <img src={Vue}/>
                  <img src={ReactImg}/>
                </div>
              </div>
            </div>
          </div>


          {/*<div className="card front">*/}
          {/*    <p className="tip">Frontend</p>*/}
          {/*    /!* <p class="second-text">Hover me</p> *!/*/}
          {/*    <div className='skill-img'>*/}
          {/*        <img src={Html}/>*/}
          {/*        <img src={Css}/>*/}
          {/*        <img src={Js}/>*/}
          {/*        <img src={Jquery}/>*/}
          {/*        <img src={React}/>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="card back">*/}
          {/*    <p className="tip">Backend</p>*/}
          {/*    <div className='skill-img'>*/}
          {/*        <img src={Java}/>*/}
          {/*        <img src={Jsp}/>*/}
          {/*        <img src={Spring}/>*/}
          {/*        <img src={Springboot}/>*/}

          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="card database&server">*/}
          {/*    <p className="tip">Database & Server</p>*/}
          {/*    <div className='skill-img'>*/}
          {/*        <img src={Mysql}/>*/}
          {/*        <img src={Sql}/>*/}
          {/*        <img src={Postgre}/>*/}
          {/*        <img src={Tomcat}/>                    */}
          {/*   </div>*/}
          {/*</div>*/}
          {/*<div className="card etc">*/}
          {/*    <p className="tip">Etc</p>*/}
          {/*    <div className='skill-img'>*/}
          {/*        <img src={Github}/>*/}
          {/*        <img src={Gitlab}/>*/}
          {/*        <img src={Slack}/>*/}
          {/*        <img src={Figma}/>                    */}
          {/*   </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </Desktop>
  );

}

export default Header;
