import styled, {keyframes} from 'styled-components';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";

import ServiceCard from "./serviceCard.jsx";

const StyledPricesContainerDiv = styled.div`
    background-color: #131212;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledServiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 90vw;
    height: 100vh;
    padding-bottom: 10vh;
    overflow: hidden;
`
const StyledServicesDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90vw;
`
const showTitleAnimation = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0); //1700 for all
  }
`;
const hideTitleAnimation = keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);

  }
  to {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
  } 
`;
const backgroundAnimation = keyframes`
    from{
      background-position: 0 center;
    }
    to{
      background-position: -200% center;
    }
`
const StyledPriceTitle = styled.div`
    width: 80vw;
    height: 10vh;
    margin-bottom: 4vh;
    font-size: calc((7vh + 7vw) /2);
    font-weight: 600;
    animation: ${props => props.show ? showTitleAnimation : hideTitleAnimation } 1.2s ease-out forwards;
    color: #CECECE;
`
const StyledPotatoSpan = styled.span`
  animation: ${backgroundAnimation} 3s infinite linear;
  background: linear-gradient(to right,
  #8b7b3d,
  #45b285,
  #223678,
  #558d8b,
  #8b7b3d
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function Prices(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Potatoes')
            .then((res) => {
                setData(res.data.data.potatoes);
            })
            .catch((error) => {
                console.error('Shit happend :( here is a nice error!', error);
            });
    }, []);

    console.log(data);

    const myRefs = useRef([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
            myRefs.current.forEach(el => observer.observe(el));
        }, []);

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    }, {
        threshold: 0.1,
    })

    const addToRefs = (el) => {
        if (el && !myRefs.current.includes(el)) {
            myRefs.current?.push(el);
        }
    };
    return(
        <StyledPricesContainerDiv ref={addToRefs}>
            <StyledServiceContainer>
                <StyledPriceTitle show={show}>Most popular <StyledPotatoSpan>potatoes</StyledPotatoSpan></StyledPriceTitle>
                <StyledServicesDiv>
                    {
                        data.map((el, index) =>(
                            <ServiceCard potatoInfo={el} nr={index} show={show} key={uuidv4()}></ServiceCard>
                        ))
                    }
                </StyledServicesDiv>
            </StyledServiceContainer>
        </StyledPricesContainerDiv>
    );
}

export default Prices;
