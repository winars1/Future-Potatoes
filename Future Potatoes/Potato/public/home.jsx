import styled, {keyframes} from 'styled-components';

import GradientSpan from "./gradientSpan.jsx";
import HomeTitle from "./homeTitle.jsx";
import ServiceMessage from "./serviceMessage.jsx";
import './bob.css'

const StyledSvgDiv = styled.div`
    width: 100vw;
    height: 100vh;
    aspect-ratio: 960/540;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("./stakV3Png.png");
    background-color: #131212;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;
const StyledGradientSpan = styled(GradientSpan)`
    font-size: calc((7.1vh + 7.1vw) / 2);
`
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
    padding-top: 2vh;
    font-size: calc((3.1vh + 3.1vw) / 2);
    margin: 0;
    animation: ${fadeIn} 1.3s ease-out;
    color: #CECECE;
`
const StyledTitleDiv = styled.div`
    //background-color: blue;
    width: 50vw;
    height: 15vh;
    margin-left: 34vw;
`

function Home(){

    return(
        <>
            <StyledSvgDiv>
                <HomeTitle>
                    Futures
                    <StyledGradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}>POTATOES </StyledGradientSpan>
                </HomeTitle>

                <StyledTitleDiv>
                    <StyledH1>
                        <StyledGradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> BIG</StyledGradientSpan>
                        money
                    </StyledH1>
                </StyledTitleDiv>

                <ServiceMessage/>
            </StyledSvgDiv>
        </>
    )
}

export default Home;


