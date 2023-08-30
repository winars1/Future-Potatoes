import styled from 'styled-components';

import GradientSpan from "./gradientSpan.jsx";
import FastMoneyHistory from "./fastMoneyHistory.jsx";
import {useEffect, useRef, useState} from "react";

const StyledFastMoneyContainerDiv = styled.div`
    width: 100vw; 
    height: 65vh;
    background-color: #131212;
    overflow: hidden;
    padding-bottom: 18vh;
`
const StyledFastMoneyDiv = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledFastMoneyTitleDiv = styled.div`
    width: 60vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6vh;
`
const StyledFastMoneyTitleH1 = styled.h1`
    font-size: calc((4.0vh + 4.0vw) / 2);
    margin: 0;
`
const StyledMoneyDiv = styled.div`
    display: flex;
`
const StyledGradientSpan = styled(GradientSpan)`
    font-size: calc((5.9vh + 5.9vw) / 2);
`
function CompanyHistory(){
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
        threshold: 0,
    })

    const addToRefs = (el) => {
        if (el && !myRefs.current.includes(el)) {
            myRefs.current?.push(el);
        }
    };


    return(
        <StyledFastMoneyContainerDiv ref={addToRefs}>
            <StyledFastMoneyDiv>
                <StyledFastMoneyTitleDiv>
                    <StyledFastMoneyTitleH1>
                        Our
                       <StyledGradientSpan colors={["#426c74","#79237d", "#426c74", "#426c74", "#79237d"]}> History </StyledGradientSpan>
                    </StyledFastMoneyTitleH1>
                </StyledFastMoneyTitleDiv>
                <StyledMoneyDiv>
                    <FastMoneyHistory reverse={false} show={show} color={["#0a98be", "#bd07c5"]}>
                        <>
                            <GradientSpan colors={["#47d2ea","#79237d", "#47d2ea", "#79237d", "#79237d"]}> First potato </GradientSpan>
                            planted
                        </>
                        <>
                            Yi Lon Ma's
                            <GradientSpan colors={["#426c74","#79237d", "#426c74", "#426c74", "#79237d"]}> great great grandfather </GradientSpan>
                            planted his first potato in his flowerpot.
                        </>
                        <>
                            1898
                        </>
                    </FastMoneyHistory>

                    <FastMoneyHistory reverse={true} show={show} color={["#1eed3f", "#a007a7"]}>
                        <>
                            <GradientSpan colors={["#23d53f","#79237d", "#22d83f", "#1dd73b", "#79237d"]}> First diamond </GradientSpan>
                            potato harvested
                        </>
                        <>
                            <GradientSpan colors={["#42744a","#79237d", "#42744a", "#42744a", "#79237d"]}> Diamond potatoes </GradientSpan>
                             were made specially for healing the America economy after the dotcom crash.
                        </>
                        <>
                            2000
                        </>
                    </FastMoneyHistory>

                    <FastMoneyHistory reverse={false} show={show} color={["#e6ab0f", "#b607be"]}>
                        <>
                            <GradientSpan colors={["#e6ab0f","#79237d", "#e6ab0f", "#e6ab0f", "#79237d"]}> Trillionth </GradientSpan>
                            potato was harvested
                        </>
                        <>
                            Our biggest achievement ever, by far the
                            <GradientSpan colors={["#7f6931","#79237d", "#7f6931", "#7f6931", "#79237d"]}> best in the whole universe </GradientSpan>
                             any way imaginable.
                        </>
                        <>
                            2022
                        </>
                    </FastMoneyHistory>
                </StyledMoneyDiv>
            </StyledFastMoneyDiv>
        </StyledFastMoneyContainerDiv>
    )
}

export default CompanyHistory;