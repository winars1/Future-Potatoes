import styled, {keyframes} from 'styled-components';
import {useEffect, useRef, useState} from "react";
import StyledPotatoSpan from "./gradientSpan.jsx";

const showMoneyStackAnimation = (reverse) => keyframes`
  from {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse ? "-200" : "+200"}%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0); //1700 for all
  }
`;
const hideMoneyStackAnimation = (reverse) => keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
  to {
    opacity: 0;
    filter: blur(5px);  
    transform: translateY(${reverse ? "-200" : "+200"}%);
  } 
`;

const StyledContactContainerDiv = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: #131212;
  display: flex;
  justify-content: center;
  overflow: hidden;
`
const StyledMoneyStackDiv = styled.div`
    position: relative;
    margin-top: 10vh;
    aspect-ratio: 2560/1440;
    background-image: url("./ultraSuperNewBg.webp");
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    width: 100vw;
    animation: ${props => props.show ? showMoneyStackAnimation(props.reverse) : hideMoneyStackAnimation(props.reverse) } 1.3s ease-out forwards;
`
const StyledDontWaitAnymoreDiv = styled.div`
  position: absolute;
  width: 30vw;
  height: 25vh;
  animation: ${props => props.show ? showMoneyStackAnimation(props.reverse) : hideMoneyStackAnimation(props.reverse)} 1.3s ease-out forwards;
  z-index: 1;
  backdrop-filter: blur(5px);
`
const StyledDontWaitAnymoreH1 = styled.h1`
    font-size: calc((3vh + 3vw) / 2);
    margin: calc((1vh + 1vw) / 2);
    font-weight: bolder;
`
const StyledDontWaitAnymoreP = styled.p`
    font-size: calc((1.5vh + 1.5vw) / 2);
`
const StyledDontWaitAnymoreButton = styled.button`
    background-color: rgba(255, 254, 254, 0.3);
    color: black;
    font-size: calc((2.1vh + 2.1vw) / 2);
    cursor: pointer;
    width: 40%;
    height: 25%;
    border-radius: 15px;
    border: black calc((0.25vh + 0.25vw) / 2) solid;
    transition: 0.6s;
    &:hover{
        font-size: calc((2.35vh + 2.35vw) / 2);
    }
`
const StyledRelativeFixDiv = styled.div`
    position: relative;
    top: 3vh;
    left: 35vw;
`

function ContactNow(){
    const myRefs = useRef([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        myRefs.current.forEach(el => observer.observe(el));
    }, []);

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            // console.log(entry);
            if(entry.isIntersecting){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    }, {
        threshold: 0,
    })

    const addToRefs = (el) => {
        if (el && !myRefs.current.includes(el)) {
            myRefs.current?.push(el);
        }
    };

    const scrollToPercentage = (percentage) => {
        const windowHeight = window.innerHeight;
        const targetPosition = (percentage / 100) * windowHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth', // Optional: Add smooth scrolling animation
        });
    }
    return(
        <StyledContactContainerDiv ref={addToRefs}>
            {/*<StyledInfiniteMoneyH1>SO MUCH MONEY</StyledInfiniteMoneyH1>*/}

            <StyledRelativeFixDiv>
                <StyledDontWaitAnymoreDiv show={show} reverse={true}>
                    <StyledDontWaitAnymoreH1>JOIN NOW</StyledDontWaitAnymoreH1>
                    <StyledDontWaitAnymoreP>Come and join all the millionaires, billionaires and hidden trillionaires of our moder days</StyledDontWaitAnymoreP>
                    <StyledDontWaitAnymoreButton>
                        <StyledPotatoSpan onClick={() => scrollToPercentage(100)} colors={["#135b04","#0b4102", "#1aff00", "#0c3e03", "#2fe808"]}>
                            JOIN NOW!
                        </StyledPotatoSpan>
                    </StyledDontWaitAnymoreButton>
                </StyledDontWaitAnymoreDiv>
            </StyledRelativeFixDiv>

            <StyledMoneyStackDiv show={show}/>
        </StyledContactContainerDiv>
    )
}

export default ContactNow;