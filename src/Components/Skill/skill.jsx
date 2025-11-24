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
import Html from '/src/images/html.png';
import Css from '/src/images/css.png';
import Js from '/src/images/js.png';
import Jquery from '/src/images/jquery.png';
import ReactImg from '/src/images/react.svg';
import Vue from '/src/images/vue.png';
import Typescript from '/src/images/typescript.png';
import Alpine from '/src/images/alpine.png';
import AgGrid from '/src/images/aggrid.png';
import Bootstrap from '/src/images/bootstrap.png';
import Tailwind from '/src/images/tailwind.png';
import Vuestic from '/src/images/vuestic.png';

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
  }

  const StyledTabs = styled((props) => (
    <Tabs
      TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan"/>}}
      {...props}
    />
  ))({
    '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: '#3b75f3',
    },
    '& .MuiTabs-indicator': {
      justifyContent: 'center',
      backgroundColor: '#3b75f3',
      display: 'flex',
    },
  });
  const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
  ))(({theme}) => ({
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    color: '#5c5c5c',
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    '&.Mui-selected': {
      color: '#3b75f3',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#3b75f3',
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

          <div className={' w-[50%] mx-auto my-10'}>
            <div className={'bg-[#F5F5F5] rounded-md shadow-lg shadow-black-500/50 p-4 w-full'}>
              <div className={'tab-area mb-2'}>
                <StyledTabs value={value} onChange={handleChange} centered>
                  <StyledTab label="FRONTEND" value={'front'}/>
                  <StyledTab label="UI / Style" value={'lib'}/>
                  <StyledTab label="ETC" value={'etc'}/>
                </StyledTabs>
              </div>
              {/*<img src={Html}/>*/}
              {/*<img src={Css}/>*/}
              <div className={'content-area p-10'}>
                <div value={'front'} style={{display: value === 'front' ? 'block' : 'none'}}>
                  <div className={'flex gap-2 items-center mb-5'}>
                    <div className={'w-[7rem]'}>
                      <img src={Html}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>기본적인 HTML 태그를 사용할 수 있습니다. </div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={Css} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>순수 CSS와 Tailwind CSS 등의 프레임워크를 활용하여 반응형 웹 레이아웃을 구현할 수 있습니다. </div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={Js} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>ES6+ 문법을 활용하며, 비동기 처리(Promise, async/await)에 대한 이해를 바탕으로 코드를 작성할 수 있습니다.</div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={Typescript} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>
                      <ul className={'list-disc ml-4'}>
                        <li>기본 타입, 인터페이스, 타입 정의를 활용해 안정적인 코드를 작성할 수 있습니다.</li>
                        <li>Vue 환경에서 props, emit, API 응답 타입 등을 정의하며 컴포넌트 간 타입 안정성을 유지할 수 있습니다.</li>
                        <li>타입 오류를 분석해 해결하는 과정에 익숙하며, 실무에서 발생하는 타입 관련 문제를 처리할 수 있습니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={Vue} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>
                      <ul className={'list-disc ml-4'}>
                        <li>Composition API를 활용해 구조화된 컴포넌트를 작성할 수 있으며, props/emit 기반의 데이터 흐름을 설계할 수 있습니다.</li>
                        <li>Vuestic UI, AG-Grid, FullCalendar 등 다양한 UI 라이브러리를 Vue 환경에 통합해 사용할 수 있습니다.</li>
                        <li>상태 관리를 Pinia 없이 reactive 기반으로 직접 구성하는 등 상황에 맞춰 유연한 설계가 가능합니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={Alpine} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>실무 프로젝트에서 UI 상태 관리 및 이벤트 처리 경험이 있습니다.</div>
                  </div>
                  <div className={'flex gap-2 items-center mb-8'}>
                    <div className={'w-[7rem]'}>
                      <img src={ReactImg} className={'w-[5rem]'}/>
                    </div>
                    <div className={'text-left leading-6 break-keep w-[75%]'}>React의 기본 개념과 컴포넌트 구조를 이해하고, 개인 프로젝트 수준의 UI 개발이 가능합니다.</div>
                  </div>


                </div>

                <div value={'lib'} style={{display: value === 'lib' ? 'block' : 'none'}}>

                  <div className={'flex flex-wrap gap-2 justify-around'}>
                    <img src={Bootstrap}/>
                    <img src={Vuestic} className={'max-w-[11rem]'}/>
                    <img src={AgGrid} className={'max-w-[11rem]'}/>
                    <img src={Tailwind} className={'max-w-[11rem]'}/>
                  </div>

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
