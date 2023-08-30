import styled, {keyframes} from 'styled-components';
import React from "react";

import PotatoCard from "./PotatoCard.jsx";

const showMoneyHistoryTitleAnimation = (reverse) => keyframes`
  from {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse === true ? "+100" : "-100"}%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0); //1700 for all
  }
`;
const hideMoneyHistoryTitleAnimation = (reverse) => keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);

  }
  to {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse === true ? "-100" : "+100"}%);
  } 
`;
const showDivAnimation = (reverse) => keyframes`
  from {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse === true ? "+200" : "-200"}%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0); //1700 for all
  }
`;
const hideDivAnimation = (reverse) => keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);

  }
  to {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse === true ? "-200" : "+200"}%);
  } 
`;
const StyledFastMoneyHistoryContainerDiv = styled.div`
    height: 60vh;
    width: 20vw;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.reverse === true ? "column-reverse" : "column"};
    align-items: center;
    margin-left: calc((3.1vh + 3.1vw) / 2);
    margin-right: calc((3.1vh + 3.1vw) / 2);
`
const StyledMoneyHistoryTitleDiv = styled.div`
  height: 28vh;
  width: 24vw;
  background-color: #000000;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => props.show ? showMoneyHistoryTitleAnimation(props.reverse) : hideMoneyHistoryTitleAnimation(props.reverse)} 1.5s ease-out forwards;
`
const StyledMoneyHistoryTitleH1 = styled.h1`
    width: 20vw;
    font-size: calc((2.1vh + 2.1vw) / 2);
    margin-top: 2vh;
    margin-bottom: 0.5vh;
    color: #CECECE;
`
const StyledMoneyHistoryDescriptionP = styled.p`
    font-weight: 600;
    font-size: calc((1.5vh + 1.5vw) / 2);
    width: 19vw;
    color: #CECECE;
`
const StyledDiv = styled.div`
    width: calc((12vh + 12vw) / 2);
    height: calc((12vh + 12vw) / 2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => props.show ? showDivAnimation(props.reverse) : hideDivAnimation(props.reverse) } 1.5s ease-out forwards;
    margin-top: 4vh;
    margin-bottom: 4vh;
`
const StyledH1 = styled.h1`
    margin-top: 1vh;
    margin-bottom: 1.5vh;
    font-size: calc((3vh + 3vw) / 2);
    color: #CECECE;
`

function FastMoneyHistory({reverse, show, children, color}){

    const childrenArray = React.Children.toArray(children);

    return(
        <StyledFastMoneyHistoryContainerDiv reverse={reverse}>
            <StyledMoneyHistoryTitleDiv show={show} reverse={reverse}>
                <StyledMoneyHistoryTitleH1>
                    {childrenArray[0]}
                </StyledMoneyHistoryTitleH1>
                <StyledMoneyHistoryDescriptionP>
                    {childrenArray[1]}
                </StyledMoneyHistoryDescriptionP>
            </StyledMoneyHistoryTitleDiv>
            <StyledDiv show={show} reverse={reverse}>
                <PotatoCard
                    width={"calc((12vh + 12vw) / 2)"}
                    height={"calc((12vh + 12vw) / 2)"}
                    color1={`${color[0]}`}
                    color2={`${color[1]}`}
                    borderRadius={"50%"}
                    show={false}
                >
                    <StyledH1>{childrenArray[2]}</StyledH1>
                </PotatoCard>
            </StyledDiv>

        </StyledFastMoneyHistoryContainerDiv>
    )
}

export default FastMoneyHistory;