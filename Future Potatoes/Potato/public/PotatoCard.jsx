import styled, {keyframes} from 'styled-components';
import {useState} from "react";

const animate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`
const Box = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: ${props => props.borderRadius ? props.borderRadius : "calc((1vh + 1vw) / 2)"};
  box-shadow: ${props => props.show ? "rgb(6, 126, 250) 0px 20px 30px -10px" : null};
  transition: 0.4s linear;

  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(${props => props.color1}, ${props => props.color2});
    animation: ${animate} 4s linear infinite;
    transition: 1s linear;
  }

  &:after {
    content: '';
    position: absolute;
    inset: calc((0.35vh + 0.35vw) / 2);
    background-color: #0d0e17;
    border-radius: ${props => props.borderRadius ? props.borderRadius : "calc((1vh + 1vw) / 2)"};

  }
`
const StyledDiv = styled.div`
    display: flex;
    width: ${props => props.width-1}vw;
    height: ${props => props.height-2}vh;
    border-radius: ${props => props.borderRadius ? props.borderRadius : "calc((1vh + 1vw) / 2)"};
    z-index: 10;
`

function PotatoCard({children, ...props}){
    const [show, setShow] = useState(false)
    return(
        <Box onMouseLeave={() => setShow(!show)} onMouseEnter={() => setShow(!show)} show={show} {...props}>
            <StyledDiv>
                {children}
            </StyledDiv>
        </Box>
    )
}

export default PotatoCard;
