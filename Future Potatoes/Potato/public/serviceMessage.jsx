import styled from 'styled-components';
import GradientSpan from "./gradientSpan.jsx";

const StyledServiceMessageContainerDiv = styled.div`
  margin-top: 5vh;
  height: 85vh;
  width: 70vw;
  display: flex;
`
const StyledMessageDiv = styled.div`
  height: 65vh;
  width: 35vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const StyledMessageTitleH1 = styled.h1`
    color: #CECECE;
    height: 10vh;
    width: 30vw;
    font-size: calc((3.1vh + 3.1vw) /2);
    margin: 0;
`
const StyledMessageTextContainerP = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
`
const StyledMessageTextP = styled.p`
    
    height: 15vh;
    width: 32vw;
    font-weight: 600;
    font-size: calc((1.4vh + 1.4vw) /2);
    color: #CECECE;
`
const StyledFounderContainerDiv = styled.div`
    height: 65vh;
    width: 35vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const StyledFounderDiv = styled.div`
    
`
const StyledFounderImg = styled.img`
    width: calc((22vh + 22vw) /2);
    border-radius: 12px;
`
const StyledFounderNameH1 = styled.h1`
    font-size: calc((3vh + 3vw) /2);
    margin-top: 1vh;
    margin-bottom: 1vh;
    color: #CECECE;
`
const StyledFounderMessageDiv = styled.div`
    width: 25vw;
    height: 32vh;
    background-color: black;
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
    margin-bottom: 3vh;
`
const StyledFounderMessageP = styled.p`
    width: 22vw;
    font-weight: 600;
    font-size: calc((1.4vh + 1.4vw) /2);
    color: #CECECE;
`
const StyledLastSectionMessageSpan = styled.span`
  color: #949393;
`
function ServiceMessage(){
    return(
        <StyledServiceMessageContainerDiv>
            <StyledMessageDiv>
                <StyledMessageTitleH1>
                    Tired of being
                    <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> poor? </GradientSpan>
                </StyledMessageTitleH1>
                <StyledMessageTextContainerP>
                    <StyledMessageTextP>
                        Behold, the illustrious claim of our esteemed potatoes, boasting an unprecedented triumph rate of
                        <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> 106.9%! </GradientSpan>

                        With unwavering assurance, we
                        <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> guarantee </GradientSpan>
                        that by indulging in these
                        <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> remarkable </GradientSpan>
                        tubers, you shall find yourself engulfed in a surging tide of opulence and an extraordinary amount of
                        <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> wealth, </GradientSpan>
                        swiftly and effortlessly.
                    </StyledMessageTextP>
                </StyledMessageTextContainerP>

                <StyledMessageTextContainerP>
                    <StyledMessageTextP>
                        Embrace the
                        <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> opulent path, </GradientSpan>
                        forsaking the plight of poverty and the banality of the masses.
                        <StyledLastSectionMessageSpan> Join us among the
                            <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}> world's wealthiest, </GradientSpan>
                            and revel in a new life of abundance and extravagance.
                        </StyledLastSectionMessageSpan>
                    </StyledMessageTextP>
                </StyledMessageTextContainerP>

            </StyledMessageDiv>
            <StyledFounderContainerDiv>
                <StyledFounderDiv>
                    <StyledFounderImg src={"./yiLonMa.jpg"}/>

                    <StyledFounderMessageDiv>
                        <StyledFounderNameH1>-Yi Lon Ma</StyledFounderNameH1>
                        <StyledFounderMessageP>
                            Experience the transformative
                            <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]} > power </GradientSpan>
                            of our
                            <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]} > extraordinary potatoes. </GradientSpan>
                            With an astounding track record of generating
                            <GradientSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]} > wealth,</GradientSpan>
                            <StyledLastSectionMessageSpan> our potatoes offer a gateway to financial abundance. Join us today and embrace a new realm of prosperity.</StyledLastSectionMessageSpan>

                        </StyledFounderMessageP>
                    </StyledFounderMessageDiv>


                </StyledFounderDiv>
            </StyledFounderContainerDiv>
        </StyledServiceMessageContainerDiv>
    )
}

export default ServiceMessage;