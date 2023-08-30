import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

const StyledReviewModal = styled.div`

    margin-top: 42.5vh;
    background-color: brown;
    width: 22vw;
    height: 11vh;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 200px;
`

const StyledModalHeadDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledIcoNameSection = styled.section`
    display: flex;
    align-items: center;
`
const StyledStarsSection = styled.section`
    display: flex;
    align-items: center;
    margin-right: 3vh;
`
const StyledP = styled.p`
    font-size: calc((1.4vh + 1.4vw)/2);
    font-weight: bold;
`
const StyledReviewP = styled.p`
    margin: 0;
    font-size: calc((1.4vh + 1.4vw)/2);
    font-weight: bold;
`

function ReviewPreviewModal(){
    return(
            <StyledReviewModal>
                <StyledModalHeadDiv>
                    <StyledIcoNameSection>
                        <img src="../Potatos/argintPotato.svg" alt="User image" width="60px" height="40px"/>
                        <StyledP>-Stoff Robert Miku</StyledP>
                    </StyledIcoNameSection>
                    <StyledStarsSection>
                        <StyledP>4</StyledP>
                        <AiFillStar size={33} color={"yellow"}></AiFillStar>
                    </StyledStarsSection>
                </StyledModalHeadDiv>
                <div>
                    <StyledReviewP>-Best product i have ever bought</StyledReviewP>
                </div>
            </StyledReviewModal>
    )
}

export default ReviewPreviewModal;
