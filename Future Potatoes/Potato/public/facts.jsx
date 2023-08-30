import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';
import {FaCalendarDays, FaPeopleGroup} from 'react-icons/fa6';
import {TbShovel} from 'react-icons/tb';
import {RiEmotionHappyFill} from 'react-icons/ri';

import Fact from "./fact.jsx";
import FactsRowLower from "./factsRowLower.jsx";
import FactsRowUpper from "./factsRowUpper.jsx";
import StyledPotatoSpan from "./gradientSpan.jsx";

const StyledFactsContainerDiv = styled.div`
  background-color: #131212;
  width: 100vw;
  height: 145vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 11vh;
`
const StyledFactsDiv = styled.div`
    width: 70vw;
    height: 145vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const StyledTitleDiv = styled.div`
    width: 70vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledTitleH1 = styled.h1`
      font-size: calc((5vh + 5vw) /2);
      font-weight: bolder;
      width: 40vw;
`
const StyledFacts = styled.div`
    width: 70vw;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const StyledFactsServices = styled.div`
    width: 70vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Facts(){
    const myRefs = useRef([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        myRefs.current.forEach(el => observer.observe(el));
    }, []);

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry);
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
        <StyledFactsContainerDiv>
            <StyledFactsDiv>
                <StyledTitleDiv>
                    <StyledTitleH1>
                        <StyledPotatoSpan colors={["#426c74","#888949", "#426c74", "#888949", "#79237d"]}>
                            Our achievements
                        </StyledPotatoSpan>
                    </StyledTitleH1>
                </StyledTitleDiv>
                <StyledFacts ref={addToRefs}>
                    <Fact show={show}>
                        <FaCalendarDays style={{ fontSize: 'calc((6vh + 6vw) / 2)' }} color={"#ece2c0"}/>
                        <>
                            125
                        </>
                        <>
                            <StyledPotatoSpan colors={["#e6ff00","#792372", "#e6ff00", "#9713ed", "#79237d"]}>
                                Years in business
                            </StyledPotatoSpan>
                        </>
                    </Fact>
                    <Fact show={show}>
                        <TbShovel style={{ fontSize: 'calc((6.3vh + 6.3vw) / 2)' }} color={"#896211"}/>
                        <>
                            One trillion
                        </>
                        <>
                            <StyledPotatoSpan colors={["#e6ff00","#13e3d2", "#003edc", "#550e82", "#792372" ]}>
                                Potatoes planted
                            </StyledPotatoSpan>
                        </>
                    </Fact>
                    <Fact show={show}>
                        <RiEmotionHappyFill style={{ fontSize: 'calc((6vh + 6vw) / 2)' }} color={"#d5d1ad"}/>
                        <>
                            1000+
                        </>
                        <>
                            <StyledPotatoSpan colors={["#e6ff00","#792372", "#e6ff00", "#9713ed", "#792372" ]}>
                                Happy Customers
                            </StyledPotatoSpan>
                        </>
                    </Fact>
                    <Fact show={show}>
                        <FaPeopleGroup style={{ fontSize: 'calc((6vh + 6vw) / 2)' }} color={"#792372"}/>
                        <>
                            9000+
                        </>
                        <>
                            <StyledPotatoSpan colors={["#e6ff00","#792372", "#e6ff00", "#9713ed", "#792372" ]}>
                                Over 9000 employees
                            </StyledPotatoSpan>
                        </>
                    </Fact>
                </StyledFacts>
                <StyledFactsServices>
                    <FactsRowUpper/>
                    <FactsRowLower/>
                </StyledFactsServices>
            </StyledFactsDiv>
        </StyledFactsContainerDiv>
    )
}

export default Facts;