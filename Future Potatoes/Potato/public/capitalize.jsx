import styled from 'styled-components';
import React from "react";
import GradientSpan from "./gradientSpan.jsx";
import {MdKeyboardArrowUp} from "react-icons/md"

const StyledServiceContainerDiv = styled.div`
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"};
    width: calc((25vh + 25vw) /2);
    height: calc((30vh + 30vw) /2);
    border-radius: 5%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const StyledServiceDiv = styled.div`
    width: calc((25vh + 25vw) /2);
    height: calc((33vh + 33vw) /2); // 23
`
const StyledServiceNameH1 = styled.h1`
  width: calc((25vh + 25vw) / 2);
  font-size: calc((4.5vh + 4.5vw) / 2);
  height: 28vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-210deg, #009ff8, #d000ff);
  background-size: 130%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const StyledServiceContainerDescriptionDiv = styled.div`
  width: calc((25vh + 25vw) / 2);
  height: calc((7vh + 7vw) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledNameP = styled.p`
  width: calc((20vh + 20vw) / 2);
  font-size: calc((3vh + 3vw) / 2);
  margin: 0;
`
const StyledCapitalizingSpan = styled.span`
    
`
const StyledOpportunitiesSpan = styled.span`
    
`
const StyledCashSpan = styled.span`
    
`
const StyledKnowledgeSpan = styled.span`
    
`
const StyledSystemH1 = styled.h1`
  width: calc((25vh + 25vw) / 2);
  font-size: calc((6.8vh + 6.8vw) / 2);
  margin-top: 9vh;
`

function Capitalize({bgColor, children}){
    // const childrenArray = React.Children.toArray(children);

    return(
        <StyledServiceContainerDiv bgColor={bgColor}>
            <StyledServiceDiv>
                <StyledServiceNameH1>
                        <StyledNameP>
                            Our
                        </StyledNameP>
                        <GradientSpan colors={["#cec605","#ff5006", "#ccbb07", "#ff5d06", "#792372" ]}>MOST ADVANCED</GradientSpan>
                        <StyledNameP>
                            System
                        </StyledNameP>
                </StyledServiceNameH1>

                <StyledServiceContainerDescriptionDiv>
                    {/*<StyledServiceDescriptionDiv>*/}
                    {/*    */}
                    {/*</StyledServiceDescriptionDiv>*/}
                    <StyledSystemH1>
                        <GradientSpan colors={["#cec605","#ff5006", "#ccbb07", "#ff5d06", "#792372" ]} sign={"-"}>

                            <StyledCapitalizingSpan>
                                C.
                            </StyledCapitalizingSpan>

                            <StyledOpportunitiesSpan>
                                O.
                            </StyledOpportunitiesSpan>

                            <StyledCashSpan>
                                C.
                            </StyledCashSpan>

                            <StyledKnowledgeSpan>
                                K.
                            </StyledKnowledgeSpan>
                        </GradientSpan>

                        {/*<GradientSpan colors={["#009ff8","#7b00ff", "#009ff8", "#8203c3", "#792372" ]}>*/}
                        {/*    O.*/}
                        {/*</GradientSpan>*/}

                        {/*<GradientSpan colors={["#009ff8","#7b00ff", "#009ff8", "#8203c3", "#792372" ]}>*/}
                        {/*    C.*/}
                        {/*</GradientSpan>*/}

                        {/*<GradientSpan colors={["#009ff8","#7b00ff", "#009ff8", "#8203c3", "#792372" ]}>*/}
                        {/*    K.*/}
                        {/*</GradientSpan>*/}
                    </StyledSystemH1>
                </StyledServiceContainerDescriptionDiv>

                {/*<StyledServiceMoreDetailDiv>*/}
                {/*    <ReactIkon size={80}/>*/}
                {/*    /!*<StyledServiceDetailButton>Click me</StyledServiceDetailButton>*!/*/}
                {/*</StyledServiceMoreDetailDiv>*/}

            </StyledServiceDiv>
        </StyledServiceContainerDiv>
    )
}

export default Capitalize;