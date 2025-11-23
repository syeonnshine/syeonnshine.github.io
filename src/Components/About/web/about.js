import { useMediaQuery } from 'react-responsive';
import '../../css/about.css';
import Profile from '../../../images/profile.jpg'
import { motion } from "framer-motion";


function About() {
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
      <div className='about'>
      <Desktop>
        <div className="about_pc">
            <div className="about_wrap">
          
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
                  <h3 className='menu-title'>ABOUT ME</h3>
            </motion.div>            
              <div className='about-contents'>
              <div className="profile-img">
                  <img src={Profile}></img>
                </div>

                <div className='profile-txt'>
                  <ul>
                    <li>
                    <span class="material-symbols-outlined">face_2</span>
                      이름
                      <p className='reply'>박시연</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">calendar_month</span>
                        생년월일
                        <p className='reply'>93.09.04</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">phone_iphone</span>
                        연락처
                        <p className='reply'>010 3367 8777</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">mail</span>
                        이메일
                        <p className='reply'>
                          <a href='mailto:siyeonz@naver.com'>siyeonz@naver.com</a>
                          </p>
                    </li>
                    
                  </ul>
                </div>
            </div>
                <div className='intro'>
                      <p><span className='bold'>밝은 성격</span>과 <span className='bold'>적극적인 커뮤니케이션</span> 능력을 가진 웹 개발자 입니다.</p>
                      <p>언제나 긍정적인 에너지로 주변과 소통하며 일을 처리하고, 새로운 아이디어에 대한 열린 마음을 가지고 있습니다. </p>
                      <p>팀과의 원활한 소통을 통해 프로젝트를 효과적으로 이끌어내는 것을 목표로 하고 있습니다</p>
                      <p>함께 일하며 <span className='bold'>긍정적인 분위기</span>를 조성하고, 협업을 통해 더 나은 <span className='bold'>결과물</span>을 만들어내기를 기대합니다.</p>
                </div>
            </div>
        </div>
      </Desktop>
      <Tablet>
      <div className="about_tablet">
            <div className="about_wrap">
          
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
                  <h3 className='menu-title'>ABOUT ME</h3>
            </motion.div>            
              <div className='about-contents'>
              <div className="profile-img">
                  <img src={Profile}></img>
                </div>

                <div className='profile-txt'>
                  <ul>
                    <li>
                    <span class="material-symbols-outlined">face_2</span>
                      이름
                      <p className='reply'>박시연</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">calendar_month</span>
                        생년월일
                        <p className='reply'>93.09.04</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">phone_iphone</span>
                        연락처
                        <p className='reply'>010 3367 8777</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">mail</span>
                        이메일
                        <p className='reply'>
                          <a href='mailto:siyeonz@naver.com'>siyeonz@naver.com</a>
                          </p>
                    </li>
                    
                  </ul>
                </div>
            </div>
                <div className='intro'>
                      <p><span className='bold'>밝은 성격</span>과 <span className='bold'>적극적인 커뮤니케이션</span> 능력을 가진 웹 개발자 입니다.</p>
                      <p>언제나 긍정적인 에너지로 주변과 소통하며 일을 처리하고, </p>
                      <p>새로운 아이디어에 대한 열린 마음을 가지고 있습니다. </p>
                      <p>팀과의 원활한 소통을 통해 프로젝트를 효과적으로 이끌어내는 것을 목표로 하고 있습니다.</p>
                      <p>함께 일하며 <span className='bold'>긍정적인 분위기</span>를 조성하고, </p>
                      <p>협업을 통해 더 나은 <span className='bold'>결과물</span>을 만들어내기를 기대합니다.</p>
                </div>
            </div>
        </div>
      </Tablet>
      <Mobile>
      <div className="about_mobile">
            <div className="about_wrap">
          
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
                  <h3 className='menu-title'>ABOUT ME</h3>
            </motion.div>            
              <div className='about-contents'>
              <div className="profile-img">
                  <img src={Profile}></img>
                </div>

                <div className='profile-txt'>
                  <ul>
                    <li>
                    <span class="material-symbols-outlined">face_2</span>
                      이름
                      <p className='reply'>박시연</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">calendar_month</span>
                        생년월일
                        <p className='reply'>93.09.04</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">phone_iphone</span>
                        연락처
                        <p className='reply'>010 3367 8777</p>
                    </li>
                    <li>
                      <span class="material-symbols-outlined">mail</span>
                        이메일
                        <p className='reply'>
                          <a href='mailto:siyeonz@naver.com'>siyeonz@naver.com</a>
                          </p>
                    </li>
                    
                  </ul>
                </div>
            </div>
                <div className='intro'>
                      <p><span className='bold'>밝은 성격</span>과 <span className='bold'>적극적인 커뮤니케이션</span> 능력을 가진 웹 개발자 입니다.</p>
                      <p>언제나 긍정적인 에너지로 주변과 소통하며 일을 처리하고, </p>
                      <p>새로운 아이디어에 대한 열린 마음을 가지고 있습니다. </p>
                      <p>팀과의 원활한 소통을 통해 프로젝트를 효과적으로 이끌어내는 것을 목표로 하고 있습니다.</p>
                      <p>함께 일하며 <span className='bold'>긍정적인 분위기</span>를 조성하고, </p>
                      <p>협업을 통해 더 나은 <span className='bold'>결과물</span>을 만들어내기를 기대합니다.</p>
                </div>
            </div>
        </div>
      </Mobile>
      </div>

    );
  }

  export default About;