import styled from 'styled-components';

import HappyPerson from "./happyPerson.jsx";
import {useEffect, useState} from "react";

const HappyPeopleDiv = styled.div`
    display: flex;
    margin: calc((3.5vh + 3.5vw) / 2) 0;
    height: ${props => props.sign === "-" ? 16 : 10}vh;
    flex-direction: ${props => props.sign === "-" ? "row" : "row-reverse"};

`
function HappyPeopleRow({sign}){
    const [divComponents, setDivComponents] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDivComponents(prevDiv => [...prevDiv, 1])
        }, 2500);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return(
        <>
            <HappyPeopleDiv sign={sign}>
                {divComponents.map((el, index) => (
                        <HappyPerson key={index} sign={sign}></HappyPerson>
                    )
                )}
            </HappyPeopleDiv>
        </>
    )
}

export default HappyPeopleRow;
