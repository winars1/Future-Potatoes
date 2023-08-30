import styled from 'styled-components';
import {BsFillClipboardCheckFill} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {FaMoneyBillTrendUp} from "react-icons/fa6";
import {useEffect, useRef, useState} from "react";

import StyledPotatoSpan from "./gradientSpan.jsx";
import ServiceFact from "./serviceFact.jsx";

const StyledFactsServicesRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70vw;
    margin-bottom: 2vh;
`

function FactsRowLower(){
    const myRefs = useRef([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        myRefs.current.forEach(el => observer.observe(el));
    });
    
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
            <ServiceFact show={show}>
                <BsFillClipboardCheckFill style={{ fontSize: 'calc((4.2vh + 4.2vw) / 2)' }} color={"#eac389"}/>
                <>
                    More than perfect
                </>
                <>
                    They are so perfect and pure that every pest in
                    <StyledPotatoSpan colors={["#8b7b3d", "#45b285", "#223678", "#558b3b", "#8b7b3d"]}> 1.25 KM </StyledPotatoSpan>
                    of the potatoes range evaporates.
                </>
            </ServiceFact>
            <ServiceFact show={show}>
                <TbTruckDelivery style={{ fontSize: 'calc((5.2vh + 5.2vw) / 2)' }} color={"#6f769b"}/>
                <>
                    Ultra-Fast Delivery
                </>
                <>
                    Delivery so fast, it gets to your doorstep
                    <StyledPotatoSpan colors={["#8b7b3d", "#45b285", "#223678", "#558b3b", "#8b7b3d"]}> before </StyledPotatoSpan>
                    you even think of ordering one.
                </>
            </ServiceFact>
            <ServiceFact show={show}>
                <FaMoneyBillTrendUp style={{ fontSize: 'calc((4.2vh + 4.2vw) / 2)' }} color={"#3b681f"}/>
                <>
                    Near infinite money
                </>
                <>
                    Our potatoes offer near
                    <StyledPotatoSpan colors={["#8b7b3d", "#45b285", "#223678", "#558b3b", "#8b7b3d"]}> unlimited  </StyledPotatoSpan>
                    money for the right price of course.
                </>
            </ServiceFact>
        </StyledFactsServicesRow>
    )
}
export default FactsRowLower;