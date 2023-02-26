import styled from "styled-components"
import {FaReact} from 'react-icons/fa'

type Props = {
    name?:string,
    logo?:any,
}

const SkillCard = (props:Props) => {
  return (
    <Div>
        
        {props.logo}
        <span className="skillName">{props.name}</span>
    </Div>
  )
}

const Div =styled.div`
    box-shadow: 1px 1px 1px silver ;
    padding: 1rem;
    /* background-color: white; */
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .skillName{
            font-size: 2rem;   
    }
    .icon{
        font-size: 10rem;
        /* color: gray; */
        /* color: lightblue; */

    }

`

export default SkillCard