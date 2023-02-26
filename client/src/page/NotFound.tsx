import React from 'react'
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Div>
        <span className='notfound'>404 | Not Found</span>
    </Div>
  )
}

const Div = styled.div`
    
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .notfound{
        color: gray;
    }
`



export default NotFound