import styled, {keyframes} from 'styled-components';

import HappyPeopleRow from "./happyPoepleRow.jsx";

const StyledContainer = styled.div`
    display: flex;
`
const StyledPeopleRowDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    margin-bottom: 3vh;
    margin-left: 15vw;
    width: 70vw;
    height: 65vh;
    overflow: hidden;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);
    font-size: 0;
  }
  to {
    opacity: 1;
    filter: blur(0px);
    font-size: calc((6vh + 6vw) /2);
  }
`;
const StyledH1 = styled.h1`
    font-size: calc((5vh + 5vw) /2);
    font-weight: bolder;
    margin-top: 3vh;
    margin-bottom: 3vh;
    color: #a61bb5;
    animation: ${fadeIn} 3s linear;
`

function HappyPeople(){
    return(
        <StyledContainer>
            <StyledPeopleRowDiv>
                <HappyPeopleRow sign={"-"}></HappyPeopleRow>
                <StyledH1>Thousands of happy customers</StyledH1>
                <HappyPeopleRow sign={"+"}></HappyPeopleRow>
            </StyledPeopleRowDiv>
        </StyledContainer>
    )
}

export default HappyPeople;