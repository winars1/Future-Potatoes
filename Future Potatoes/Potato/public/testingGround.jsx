import styled, {keyframes} from 'styled-components';
import {AiFillStar} from 'react-icons/ai'
import React, {useState, useEffect, useRef} from 'react';
import ReviewPreviewModal from "./reviewPreviewModal.jsx";

const StyledTestingGroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0e1538;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
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
  width: ${props => props.width}vw;
  height: ${props => props.height}vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: calc(calc((1vh + 1vw) / 2));
  box-shadow: ${props => props.show ? "rgb(6, 126, 250) 0px 20px 30px -10px" : null};
  transition: 0.4s linear;
  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(lightskyblue, deeppink);
    animation: ${animate} 4s linear infinite;
    transition: 1s linear;
  }

  &:after {
    content: '';
    position: absolute;
    inset: calc((0.5vh + 0.5vw) / 2);
    background-color: #0a164c;
    //backdrop-filter: blur(5px);
    border-radius: calc((1vh + 1vw) / 2);

  }
`

const BoxH2 = styled.h2`
    color: white;
    font-size: 5em;
    z-index: 10;
`
const StyledDiv = styled.div`
    width: 20vw;
    height: 20vh;
    background-color: red;
    margin
    z-index: 10;
`
function TestingGround(){
    const raft = useRef(null);
    const [show, setShow] = useState(false)
    const width = 30;
    const height = 30;
    return(
        <StyledTestingGroundDiv>
            <Box ref={raft} width={width} height={height} show={show} onMouseLeave={() => setShow(!show)} onMouseEnter={() => setShow(!show)}>
                {/*<StyledDiv></StyledDiv>*/}
            </Box>
        </StyledTestingGroundDiv>
    )
}

export default TestingGround;
