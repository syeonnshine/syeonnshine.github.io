import '../../css/about.css';
import Profile from '../../../images/profile.jpg'
import { motion } from "framer-motion";


function About() {
   
    return (
      <div className="about_pc">
          <div className="about_wrap">
        
            <h3>ABOUT ME</h3>
            
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
                      <p className='reply'>siyeonz@naver.com</p>
                  </li>
                  
                </ul>
              </div>
          </div>
          </div>
      </div>
    );
  }

  export default About;