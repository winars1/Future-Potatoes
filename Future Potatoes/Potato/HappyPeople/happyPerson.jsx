import styled, {keyframes} from 'styled-components';
import {useState} from "react";

const moveRightIt = keyframes`
  from {
    transform: translateX(0vw);
  }
  to {
    transform: translateX(130vw); //1700 for all
  }
`;
const moveLeftIt = keyframes`
  from {
    transform: translateX(0vw); //1700 for all
  }
  to {
    transform: translateX(-130vw);
  }
`;
const StyledHappyPersonDiv = styled.div`
    position: absolute;
    left: ${props => (props.sign === "-" ? -14 : 98.2)}vw; //-20 : 104 ||| 
    background-color: #535bf2;
    width: 25vh;
    height: 16vh;
    margin: 0 1vw;
    animation: ${props => (props.sign === "-" ? moveRightIt : moveLeftIt)} 19s linear forwards; //28
`

function HappyPerson({sign}){
    const [animationDone, setAnimationDone] = useState(false);

    const handleAnimationEnd = () => {
        setAnimationDone(true);
    };

    return(
        <>
            {!animationDone && (
                <StyledHappyPersonDiv  sign={sign}  onAnimationEnd={handleAnimationEnd}>
                    Caeap verde

                </StyledHappyPersonDiv>
            )}
        </>
    )
}

export default HappyPerson;