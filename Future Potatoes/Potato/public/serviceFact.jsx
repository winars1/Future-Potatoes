import styled, {keyframes} from 'styled-components';
import React from "react";

const showCardsAnimation = keyframes`
  from {
    opacity: 0;
    filter: blur(7px);
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
`;

const hideCardsAnimation = keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);

  }
  to {
    opacity: 0;
    filter: blur(7px);
    transform: translateX(-100%);
  }
`;
const StyledServiceContainerDiv = styled.div`
    background-color: black;
    width: calc((25vh + 25vw) /2);
    height: calc((25vh + 25vw) /2);
    border-radius: 5%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${props => props.show ? showCardsAnimation : hideCardsAnimation } 1.2s ease-out forwards;
`
const StyledServiceDiv = styled.div`
    width: calc((20vh + 20vw) /2);
    height: calc((23vh + 23vw) /2);
`
const StyledServiceIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((20vh + 20vw) /2);
    height: 8vh;
`
const StyledServiceNameH1 = styled.h1`
    width: calc((20vh + 20vw) / 2);
    font-size: calc((2.28vh + 2.28vw) / 2);
    height: 6vh;
    margin: 0;
    color: #CECECE;
`
const StyledServiceContainerDescriptionDiv = styled.div`
  width: calc((20vh + 20vw) / 2);
  height: 17vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledServiceDescriptionDiv = styled.div`
    width: calc((20vh + 20vw) / 2);
    height: auto;
    font-weight: 600;
    font-size: calc((1.7vh + 1.7vw) / 2);
    color: #CECECE;
`
function ServiceFact({show, children}){
    const childrenArray = React.Children.toArray(children);

    return(
        <StyledServiceContainerDiv show={show}>
            <StyledServiceDiv>
                <StyledServiceIconDiv>
                    {childrenArray[0]}
                </StyledServiceIconDiv>

                <StyledServiceNameH1>
                    {childrenArray[1]}
                </StyledServiceNameH1>

                <StyledServiceContainerDescriptionDiv>
                    <StyledServiceDescriptionDiv>
                        {childrenArray[2]}
                    </StyledServiceDescriptionDiv>
                </StyledServiceContainerDescriptionDiv>
            </StyledServiceDiv>
        </StyledServiceContainerDiv>
    )
}

export default ServiceFact;