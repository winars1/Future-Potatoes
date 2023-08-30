import styled, {keyframes} from "styled-components";
import React from 'react';
import PotatoCard from "./PotatoCard.jsx";

const showFactAnimation = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(-200%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`;
const hideFactAnimation = keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);

  }
  to {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(-200%);
  } 
`;
const StyledFactDiv = styled.div`
    width: 10vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const StyledFactIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((9vh + 9vw) / 2);
    height: calc((9vh + 9vw) / 2);
    border-radius: 50%;
    animation: ${props => props.show ? showFactAnimation : hideFactAnimation } 1.5s ease-out forwards;
`
const StyledFactValueDiv = styled.div`
    width: 18vw;
    height: 5vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vh;
`
const StyledFactNameDiv = styled.div` // maybe flex
    width: 16vw;
    height: 5vh;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 20vh;
    border-radius: 12px;
    animation: ${props => props.show ? showFactAnimation : hideFactAnimation } 1.5s ease-out forwards;
`
const StyledFactValueH1 = styled.h1`
  margin: 0;
  font-size: calc((3vh + 3vw) / 2);
  background-image: linear-gradient(30deg, #ffcb00, #ff0d0d);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const StyledFactValueH2 = styled.h2`
    margin: 0;
    font-size: calc((2vh + 2vw) / 2);
`

function Fact({show, children}){
    const childrenArray = React.Children.toArray(children);

    return(
        <StyledFactDiv>
            <StyledFactIconDiv show={show} >
                <PotatoCard borderRadius={"50%"}
                            color1={"#7004b0"}
                            color2={"#ff8200"}
                            width={"calc((12vh + 12vw) / 2)"}
                            height={"calc((9vh + 9vw) / 2)"}
                >
                    {childrenArray[0]}
                </PotatoCard>
            </StyledFactIconDiv>
            <StyledDiv show={show}>
                <StyledFactValueDiv>
                    <StyledFactValueH1>{childrenArray[1]}</StyledFactValueH1>
                </StyledFactValueDiv>

                <StyledFactNameDiv>
                    <StyledFactValueH2>{childrenArray[2]}</StyledFactValueH2>
                </StyledFactNameDiv>
            </StyledDiv>
        </StyledFactDiv>
    )
}
//#024b82
export default Fact;