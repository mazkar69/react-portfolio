
import { AiOutlineArrowRight,AiFillInstagram,AiFillGithub,AiFillLinkedin } from 'react-icons/ai'
import styled from 'styled-components'
import { useGlobalContext } from '../../../context'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { isDark } = useGlobalContext();
    return (
        <Div className="section-footer section footer" isDark={isDark}>
            <div className=" container grid grid-four-column">
                <div className="f-about">
                    {/* <h3>About</h3> */}
                    <span className='sig'>
                        Mohd Azkar
                    </span>
                    <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
                </div>
                <div className="f-links">
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span>
                            Home</Link>
                        </li>
                        <li><a href="#section-bio"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span>
                            About</a>
                        </li>

                        <li><a href="#protects"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span>
                            Project</a>
                        </li>
                        <li><a href="#contact"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span>
                            Contact</a>
                        </li>

                    </ul>
                </div>
                <div className="f-services">
                    <h3>Projects</h3>
                    <ul>
                        <li><a href="https://talk2live.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span> ChatApp</a>
                        </li>
                        <li><a href="http://coursesfree.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span> FreeCourse</a>
                            
                        </li>
                        <li><a href="/blog" target="_blank" rel="noopener noreferrer"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span> Blog </a>
                        </li>
                        <li><a href="https://azr-musicplayer.netlify.app"><span>
                            <AiOutlineArrowRight className='icon' />
                        </span> Music Player</a>
                           
                        </li>

                    </ul>
                </div>

                <div className="f-address">
                    <h3>Have a Question?</h3>
                    <address>
                        <div>
                            <p><span>
                                <AiOutlineArrowRight className='icon' />
                            </span>Delhi, India</p>
                        </div>
                        <div>
                            <p><span>
                                <AiOutlineArrowRight className='icon' />
                            </span><a href="tel:+91884375826">+91 8840375826</a></p>
                        </div>
                        <div>
                            <p><span>
                                <AiOutlineArrowRight className='icon' />
                            </span><a href="mailto:mohdazkar@outlook.com">mohdazkar@outlook.com</a></p>
                        </div>
                    </address>
                </div>

            </div>
            <div className="container">
                <div className="f-social-icons">
                    <a href="https://www.instagram.com/md.azkaar/" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className='social-icon'/>
                    </a>
                    <a href="https://github.com/mazkar69" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className='social-icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-azkar-6575051bb/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='social-icon'/>
                    </a>
                </div>
                <div className="f-credit">
                    {/* <p> Copyright &copy; all rights reserved. This website is made by AzKaR</p> */}
                    <p> No &copy; copyright issues. Made by AzKaR with ❤️</p>
                </div>
            </div>

        </Div>
    )
}

const Div = styled.footer<{ isDark?: boolean }>`
    

/*==============================================
              FOOTER SECTION START
================================================ */
background-image: url('/images/patternblack.JPG');
background-position: right bottom;
background-repeat: no-repeat;
background-size: cover;

  background-color: ${(props: { isDark?: boolean }) => {
        return !props.isDark ? "var(--heading)" : "var(--darkBgSecoundry)";
    }};

    .common-heading{
        color:${(props: { isDark?: boolean }) => {
        return !props.isDark ? "" : "white";
    }} !important;
    }   

    /* transition: all 0.7s linear; */

 h3 {
  color: white;
  margin-bottom: 4rem;

}

.sig{
    font-family: 'Sacramento', cursive;
    color: white !important;
    font-size: 5rem;
    color: RGB(65, 176, 191) !important;

}
.f-about p {
  color: #adadad;
}

.f-links ul,
.f-services ul,
.f-address address {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  justify-content: center;

}

.f-links li,
.f-links a,
.f-services li,
.f-services a {
  font-size: 1.8rem;
  color: #adadad;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s linear;

}


.f-links span,
.f-links span,
.f-address span {
  margin-right: 1rem;
}

.f-address p,
.f-address p a {
  font-style: normal;
  color: #adadad;

}

.icon{
    font-size: 2rem;
}

.f-social-icons {
  margin: 5rem 0;
  /* text-align: center; */
  color: #adadad;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

}

.f-social-icons .icon {
  width: 3rem;
  height: 3rem;
  background-color: var(--icon-bg);
  /* background-color: transparent; */
  display: inline-block;
  padding: 1.4rem 1.8rem;
  position: relative;
  color: white;
  border-radius: 1rem;

}

.f-credit {
  text-align: center;
  color: #adadad;

}
.social-icon{
    font-size: 4rem;
    color: white !important;
}

.footer a:hover,
.footer:active {
  color: white;


}



`

export default Footer