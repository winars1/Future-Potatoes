import styled, {keyframes} from 'styled-components';
import {useState} from "react";

import ServicePerksLi from "./servicePerksLi.jsx";
import PotatoCard from "./PotatoCard.jsx";
import {v4 as uuidv4} from "uuid";
import {useCart} from "./cartContext.jsx";

const showCardsAnimation = keyframes`
  from {
    opacity: 0;
    filter: blur(7px);
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
`;
const hideCardsAnimation = keyframes`
  from {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);

  }
  to {
    opacity: 0;
    filter: blur(7px);
    transform: translateX(-100%);
  }
`;

const StyledServiceDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`
const StyledCardHeadDiv = styled.div`
  height: 18vh;
  width: 17vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`

const StyledCardBottomDiv = styled.div`
    height: 37vh;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledImgDiv = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 10vw;
    height: 18vh;
`
const StyledImg = styled.img`
    height: 13vh;
`
const StyledServiceNameH1 = styled.h1`
    font-size: calc((2.1vh + 2.1vw) /2);
    margin-bottom: 1vh;
    
`
const StyledServicePerksUl = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
`
const StyledBuyMeHover = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    height: 65vh;  //55
    width: 27vw;   //17
    transition: 0.4s linear;
    z-index: 1;
    ${props => props.showCard ? "backdrop-filter: blur(4px);\n  background-color: rgba(55, 55, 55, 0.7);" : null}
`

const StyledBuyNowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: ${props => props.showCard ? 22 : -13}vh;
    height: 8.5vh;
    width: 10vw;
    transition: 0.6s ease-out;
    filter: blur(${props => props.showCard ? 0 : 5}px);
    background-color: black;
    border-radius: calc((6vh + 6vw) / 2);
    border: calc((0.25vh + 0.25vw) / 2) solid #fbfbfb;
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #ffffff,
    0 0 2rem #bc13fe,
    0 0 0.8rem #bc13fe,
    0 0 2.8rem #bc13fe;
}
`
const StyledBuyNowButtonH2 = styled.h2`
    position: relative;
    font-size: calc((1.5vh + 1.5vw) / 2);
    z-index: 10;
    text-shadow: 0 0 5px #00ffd9, 0 0 15px #00ffff, 0 0 20px #00ffea, 0 0 40px #00eaff, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #99e6c0;
    cursor: pointer;
`
const Container = styled.div`
   height: 55vh;
   width: 17vw;
   margin-top: 1vh;
   opacity: 0;
   animation: ${props => props.show ? showCardsAnimation : hideCardsAnimation } 0.5s ease-out forwards;
    animation-delay: ${props => props.nr*0.25}s;
`

function ServiceCard({potatoInfo ,...props}){

    const [showCard, setShowCard] = useState(null);

    const { onAddCartItems } = useCart();
    const handleAddProduct = () => {
        console.log("Added in service")
        onAddCartItems(potatoInfo);
    };
    return(
        <Container {...props}>
            <PotatoCard width={"18vw"} height={"58vh"} color1={"red"} color2={"blue"}>
                <StyledServiceDiv {...props} onMouseEnter={() => setShowCard(!showCard)} onMouseLeave={() => setShowCard(!showCard)}>
                    <StyledCardHeadDiv>
                        <StyledImgDiv>
                            <StyledImg src={potatoInfo.images}/>
                        </StyledImgDiv>
                        <StyledServiceNameH1>
                            {potatoInfo.name} potato
                        </StyledServiceNameH1>
                    </StyledCardHeadDiv>
                    <StyledCardBottomDiv>
                        <StyledServicePerksUl>
                            {potatoInfo.description.map((el) =>
                                <ServicePerksLi available={true} key={uuidv4()}>
                                    {el}
                                </ServicePerksLi>)}
                        </StyledServicePerksUl>
                    </StyledCardBottomDiv>

                    <StyledBuyMeHover onClick={handleAddProduct} showCard={showCard}>
                        <StyledBuyNowButton showCard={showCard} color1={"red"} color2={"blue"}>
                            <StyledBuyNowButtonH2 onClick={handleAddProduct}>BUY NOW! <br/>  {potatoInfo.price} $</StyledBuyNowButtonH2>
                        </StyledBuyNowButton>
                    </StyledBuyMeHover>
                </StyledServiceDiv>
            </PotatoCard>
        </Container>


    )
}

export default ServiceCard;








// width: 9vw;
// height: 9vh;
// display: flex;
// justify-content: center;
// align-items: center;
// background-color: rgba(160, 21, 21, 0.5);
// overflow: hidden;
// border-radius: calc(calc((0.4vh + 0.4vw) / 2));
// box-shadow: ${props => props.showCard ? "rgb(6, 126, 250) 0px 20px 30px -10px" : null};
// &:before {
//   content: '';
//   position: absolute;
//   width: 200%;
//   height: 300%;
//   background: linear-gradient(${props => props.color1}, ${props => props.color2});
//   rotate: 45deg;
//     animation: ${animate} 4s linear infinite;
//   transition: 1s linear;
// }
// &:after {
//   content: '';
//   position: absolute;
//   inset: calc((0.5vh + 0.5vw) / 2);
//   background-color: #0a164c;
//   //backdrop-filter: blur(5px);
//   border-radius: calc((0.4vh + 0.4vw) / 2);
// }