import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import { useGlobalContext } from "../../../context"
const Project = () => {
    const {isDark,projects} = useGlobalContext();
    // console.log(projects)
    return (
        <Section className="section section-projects" id="protects" isDark={isDark}>
            <div className="container">
                <h2 className="common-heading">Projects</h2>
            </div>

            <div className="container grid grid-three-column portfolio-images">
                {
                    projects?.map((project:any)=>{
                        return <ProjectCard project={project} key={project._id} />
                    })
                }

 


            </div>
        </Section>
    )
}

const Section = styled.section<{isDark?:boolean}>`
    

    
/*==============================================
              Project SECTION START
================================================ */


background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "var(--bg)" : "var(--darkBg)";
    }};

.common-heading{
    color:${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "white";
    }} !important;
}

 p {
  max-width: 60rem;

}


.grid{
    gap: 4rem;
}



`

export default Project