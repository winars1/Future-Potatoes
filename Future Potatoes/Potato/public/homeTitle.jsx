import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(-20vh);
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
`;
const StyledH1 = styled.h1`
    padding-top: 5vh;
    font-size: calc((3.1vh + 3.1vw) / 2);
    margin: 0;
    animation: ${fadeIn} 1.3s ease-out;
    color: #CECECE;
`
const StyledTitleDiv = styled.div`
    width: 50vw;
    height: 15vh;
`

function HomeTitle({children}){
    return(
        <StyledTitleDiv>
            <StyledH1>{children}</StyledH1>
        </StyledTitleDiv>
    )
}

export default HomeTitle;