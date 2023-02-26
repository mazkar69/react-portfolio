import styled from "styled-components"
import { AiOutlineArrowRight } from "react-icons/ai"
import { useGlobalContext } from "../../../context"

const ProjectCard = ({project}:{"project":any}) => {
    const { isDark } = useGlobalContext();
    // console.log(props)
    return (
        <Div className="img-overlay p-btn--2" isDark={isDark}>
            <picture>
                <img src={project.thumbnail} alt="myworks" />

            </picture>
            <div className="data">
                <h3 className="title">{project.name}</h3>
                <a href={project.liveURL} target="_blank" rel="noreferrer" className="action">
                    <span>View </span>
                    <AiOutlineArrowRight className="icon" />

                </a>
            </div>

        </Div>
    )
}

const Div = styled.div<{ isDark?: boolean }>`
    border: 1px solid silver;
    cursor: pointer;


    h3{
        color: ${(props:{isDark?:boolean})=>{
            return !props.isDark ? "" : "var(--darkBgPara)";
        }};
    }
    picture{
        width: 100%;
        img{
            width: 100%;
            height: 200px;
        }

    }
    .data{

        border-top: 1px solid silver;
        padding: 2rem;
        display: flex;
        justify-content: space-between;

        background-color: ${(props:{isDark?:boolean})=>{
            return !props.isDark ? "" : "var(--darkCard)";
        }};

        .action{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            color: var(--helper);
            cursor: pointer;
            font-size: 2rem;



            .icon{
                transition: all .3s linear;
            }

            &:hover{
                .icon{
                    transform: translateX(5px);
                }
            }
        }
    }


`
export default ProjectCard