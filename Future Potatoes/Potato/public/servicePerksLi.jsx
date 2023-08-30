import styled from 'styled-components';

import {FaCheck, FaTimes} from 'react-icons/fa'

const StyledServicePerksLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: calc((3.2vh + 3.2vw) /2);
  margin-bottom: 1vh;
  color: #CECECE;
`

const StyledTextP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.5vw;
    height: 6vh;
    margin: 0;
    padding-bottom: calc((0.27vh + 0.27vw) /2);
    font-size: calc((1.34vh + 1.34vw) /2);
    font-weight: bold;
`

function ServicePerksLi({children, available}){
    return(
        <StyledServicePerksLi>
            {available ? <FaCheck style={{ fontSize: 'calc((1.6vh + 1.6vw) / 2)' }} color={"green"}/> : <FaTimes style={{ fontSize: 'calc((1.8vh + 1.8vw) / 2)' }} color={"red"}/>}
            <StyledTextP avai>{children}</StyledTextP>
        </StyledServicePerksLi>
    )
}

export default ServicePerksLi;