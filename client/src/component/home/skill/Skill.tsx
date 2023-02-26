import styled from "styled-components"
import { FaReact, FaNodeJs ,FaJava} from 'react-icons/fa'
import {DiMongodb,DiHtml5,DiCss3,DiJavascript,DiBootstrap,DiMysql} from 'react-icons/di'
import {SiTypescript,SiTailwindcss,SiExpress} from 'react-icons/si'

import { useGlobalContext } from "../../../context"

const Skill = () => {
  const {isDark,data} = useGlobalContext();
  return (
    <Section className="section " id="section-bio" isDark={isDark}>
      <div className="container">
        <h2 className="common-heading">My Skills & Tools</h2>
      </div>
      <div className="container grid grid-two-column">
        <div className="bio-data box">

          <h3>Everyday is a New Challange! 🎇</h3>
          <p className="para" dangerouslySetInnerHTML={{ __html: data?.about}}/>
          <div className="bio-data-btn">
            <a href={data.resume}
              target="_blank" rel="noreferrer" download="" className="btn">Download CV</a>
          </div>

        </div>

        <div className="skills box grid grid-four-column">

          <div className="skill">
            <FaReact className="icon"/>
            <span className="skillName">React.js</span>
          </div>
          <div className="skill">
            <SiTypescript className="icon"/>
            <span className="skillName">TypeScript</span>
          </div>
          <div className="skill">
            <FaNodeJs className="icon"/>
            <span className="skillName">Node.js</span>
          </div>
          <div className="skill">
            <SiExpress className="icon"/>
            <span className="skillName">Express.js</span>
          </div>
          
          <div className="skill">
            <DiJavascript className="icon"/>
            <span className="skillName">JavaScript</span>
          </div>
          <div className="skill">
            <DiHtml5 className="icon"/>
            <span className="skillName">HTML</span>
          </div>
          <div className="skill">
            <DiCss3 className="icon"/>
            <span className="skillName">CSS</span>
          </div>
          <div className="skill">
            <DiBootstrap className="icon"/>
            <span className="skillName">Bootstrap</span>
          </div>
          <div className="skill">
            <SiTailwindcss className="icon"/>
            <span className="skillName">Tailwind</span>
          </div>
          <div className="skill">
            <DiMongodb className="icon"/>
            <span className="skillName">MongoDB</span>
          </div>
          <div className="skill">
            <DiMysql className="icon"/>
            <span className="skillName">MySql</span>
          </div>
          <div className="skill">
            <FaJava className="icon"/>
            <span className="skillName">Java</span>
          </div>

        </div>


      </div>
    </Section>
  )
}
const Section = styled.section<{isDark?:boolean}>`
    background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "var(--bg)" : "var(--darkBg)";
    }};

.common-heading,h3{
    color:${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "white";
    }} !important;
}
p,.skillName{
  color:${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "var(--darkBgPara)";
    }} !important;

}
  .box{
    padding: 1rem;
  /* border:1px solid red; */
  }
  .bio-data{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    gap: 2rem;
    flex-direction: column;

  }
  .grid{
    gap:5rem
  }
  .skills{

  }

  .skill{
    box-shadow: 1px 1px 1px silver ;
    padding: 1rem;
    background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "var(--darkCard)";
    }};
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon{
    font-size: 10rem;
    color: gray;
  }
  .skillName{
    font-size: 2rem; 
  }

  @media (max-width:900px) {
    .grid-four-column{
      grid-template-columns: 1fr 1fr 1fr;
    }
    
  }
  @media (max-width:700px) {
    .grid-two-column{
      grid-template-columns: 1fr;
    }
    .grid-four-column{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
  }
  @media (max-width:600px) {

    .grid-four-column{
      grid-template-columns: 1fr 1fr 1fr;
    }
    
  }
`
export default Skill;