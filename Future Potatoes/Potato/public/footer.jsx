import styled from 'styled-components';

const StyledFooterContainerDiv = styled.div`
  height: 12vh;
  width: 100vw;
  background-color: #131212;
  z-index: -1;
  display: flex;

`
const StyledInfoDiv = styled.div`
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledTradeMarkDiv = styled.div`
    height: 12vh;
    width: 33vw;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledContactInfoDiv = styled.div`
    height: 12vh;
    width: 10vw;
    font-size: calc((1.5vh + 1.5vw)/2);
    padding-top: calc((1.9vh + 1.9vw)/2);
    display: flex;
    justify-content: center;
`
const StyledContactsDiv = styled.div`
    height: 12vh; 
    width: 23vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const StyledContactP = styled.p`
    font-size: calc((1.2vh + 1.2vw)/2);
    display: flex;
    margin: 0;
`
function Footer(){
    return(
        <StyledFooterContainerDiv>
            <StyledInfoDiv>
                <StyledContactInfoDiv>
                    Contact info:
                </StyledContactInfoDiv>
                <StyledContactsDiv>
                    <StyledContactP>Phone number: 0778-438-751</StyledContactP>
                    <StyledContactP>Email: moneypotatoes100@gmail.com</StyledContactP>
                    <StyledContactP>Fax: +1 4125 521 04182</StyledContactP>
                </StyledContactsDiv>
            </StyledInfoDiv>
            <StyledTradeMarkDiv>
                Future Potatoes Inc.&#169;
            </StyledTradeMarkDiv>
        </StyledFooterContainerDiv>
    )
}

export default Footer;