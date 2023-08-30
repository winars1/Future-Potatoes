import styled from 'styled-components';
import {PiChartLineUpBold} from "react-icons/pi";
import {FaLeaf} from "react-icons/fa6";
import {useEffect, useRef, useState} from "react";

import StyledPotatoSpan from "./gradientSpan.jsx";
import Capitalize from "./capitalize.jsx";
import ServiceFact from "./serviceFact.jsx";

const StyledFactsServicesRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70vw;
    margin-bottom: 2vh;
`

function FactsRowUpper(){
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
        <StyledFactsServicesRow ref={addToRefs}>
            <Capitalize/>
            <ServiceFact show={show}>
                <PiChartLineUpBold style={{ fontSize: 'calc((4.6vh + 4.26vw)/ 2)' }} color={"#ffce00"}/>
                <>
                    Trillions planted
                </>
                <>
                    Every year we set our goal to plant at least
                    <StyledPotatoSpan colors={["#e6ff00","#792372", "#e6ff00", "#9713ed", "#792372"]}> 25% more </StyledPotatoSpan>
                    potatoes than the last.
                </>
            </ServiceFact>
            <ServiceFact show={show}>
                <FaLeaf style={{ fontSize: 'calc((4.2vh + 4.2vw)/ 2)' }} color={"#62ff00"}/>
                <>
                    Carbon negative
                </>
                <>
                    Our potatoes are so well engineered that every potato removes CO2 from the atmosphere
                    <StyledPotatoSpan colors={["#8b7b3d", "#45b285", "#223678", "#558b3b", "#8b7b3d"]}> 50 times </StyledPotatoSpan>
                    their own weight.
                </>
            </ServiceFact>
        </StyledFactsServicesRow>
    )
}
export default FactsRowUpper;
