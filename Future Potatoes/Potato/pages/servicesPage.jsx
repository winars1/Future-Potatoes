import styled from "styled-components";
import {useEffect, useRef} from "react";

const StyledSection = styled.section`
  //background-color: #2f31a7;
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
  //transition-delay: 400ms;
  //margin-bottom: 10px;
`;


function ServicePage(){
    return(
        <>
            <StyledSection className={"hidden"}  key={2}>
                <h1>
                    I like lemons
                </h1>
                <p>
                    Lemons are good for you if you dont drink melk
                </p>

            </StyledSection>

            <StyledSection className={"hidden"} key={3}>
                <h1>
                    I love zoozoozuuuzuu
                </h1>
                <p>
                    ZoozooZuuzuu can be very healthy if you dont drink apple pie
                </p>
                <button >
                    Scroll Down
                </button>
                <button >
                    Scroll Up
                </button>
            </StyledSection>

            <StyledSection className={"hidden"}  key={4}>
                <h1>
                    Makaroonzi with cheese are bed
                </h1>
                <p>
                    You can sleep in a bed but cant bed in a sleeper
                </p>
                <button>
                    Scroll Up
                </button>
            </StyledSection>
        </>
    )
}

export default ServicePage;