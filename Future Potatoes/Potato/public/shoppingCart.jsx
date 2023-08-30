import CartProduct from "./cartProduct.jsx";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import {useCart} from "./cartContext.jsx";
import {useState} from "react";

import { AiOutlineShoppingCart } from 'react-icons/ai';

const StyledShoppingCartDiv = styled.div`
  display: ${props => props.showCart ? "flex" : "none"};
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  top: 0;
  z-index: 1000;

`
const StyledLeftSideDiv = styled.div`
    height: inherit;
    width: 60vw;
`
const StyledRightSideDiv = styled.div`
  background-color: #000000;
  height: inherit;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 2%;
  border-top-left-radius: 2%;

`
const StyledCartDiv = styled.div`
  background-color: #1a1a1a;
  height: 92%;
  width: 86%;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const StyledAllProductsDiv = styled.div`
  height: 10%;
  display: flex;
  border-bottom: #4f4d4d 2px solid;
`
const StyledProductsDiv = styled.div`
    height: 69%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledProductsTotalDiv = styled.div`
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc((2.1vh + 2.1vw) / 2);
    font-weight: 500;
`
const StyledContinueDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7%;
`
const StyledSendOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7%;
`
const StyledProductsNumberDiv = styled.div`
    height: 100%;
    width: 85%;
    display: flex;
    align-items: center;
    font-size: calc((2.6vh + 2.6vw) / 2);
    padding-right: calc((2vh + 2vw) / 2);
    justify-content: start;
    padding-left: calc((2.6vh + 2.6vw) / 2);
`
const StyledCloseCartDiv = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 3%;
    font-size: calc((3.0vh + 3.0vw) / 2);
    transition: 0.45s;
    cursor: pointer;
    user-select: none;
    &:hover{
        color: red;
        font-size: calc((3.9vh + 3.9vw) / 2);
    }
`
const StyledCartIcon = styled.div`
    width: calc((5.0vh + 5.0vw) / 2);
    height: calc((5.0vh + 5.0vw) / 2);
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 1000;
    display: ${props => props.showCart ? "none" : "flex"};
`
const StyledSendOrderButton = styled.button`
    width: 30%;
    height: 70%;
    font-size: calc((1.8vh + 1.8vw) / 2);
    border-radius: 10px;
    background-color: #000000;
    color: #ffffff;
    border: #ffffff calc((0.15vh + 0.15vw) / 2) solid;
    transition: 0.4s;
    &:hover {
      font-size: calc((1.95vh + 1.95vw) / 2);
      box-shadow: rgb(241, 241, 241) 0px 10px 10px -10px;
  }

`
const StyledContinueButton = styled.button`
    width: 50%;
    height: 70%;
    font-size: calc((1.8vh + 1.8vw) / 2);
    border-radius: 10px;
    background-color: #DA3C0C;
    color: #ffffff;
    border: none;
    transition: 0.4s;
    &:hover {
      font-size: calc((1.95vh + 1.95vw) / 2);
      box-shadow: rgb(232, 65, 11) 0px 10px 20px -10px;
  }
`

function ShoppingCart({isVisible}){

    const [useShowCart, setShowCart] = useState(false);
    const { onClearCartItems } = useCart();
    const handleDeleteAllProducts = () => {
        onClearCartItems();
    };
    function handleShowCart(){
        setShowCart((prevState) => !prevState);
    }

    const cartProducts = useCart().cartItems;
    return(
        <>
            <StyledCartIcon>
                <AiOutlineShoppingCart onClick={handleShowCart} color={"#9e9e9e"} style={{ cursor: 'pointer', fontSize: 'calc((4vh + 4vw) / 2)' }}></AiOutlineShoppingCart>
            </StyledCartIcon>

            <StyledShoppingCartDiv visible={isVisible} showCart={useShowCart}>
                <StyledLeftSideDiv/>

                <StyledRightSideDiv>
                    <StyledCartDiv>

                        <StyledAllProductsDiv>
                            <StyledProductsNumberDiv>
                                {
                                    useCart().onTotalProducts()
                                }
                                {
                                    useCart().onTotalProducts() > 1 ? "  Products in basket!" : "  Product in basket!"
                                }
                            </StyledProductsNumberDiv>
                            <StyledCloseCartDiv onClick={handleShowCart}>
                                X
                            </StyledCloseCartDiv>
                        </StyledAllProductsDiv>

                        <StyledProductsDiv>
                            {
                                cartProducts.map((el) => (
                                    <CartProduct product = {el} key={uuidv4()}/>
                                ))
                            }
                        </StyledProductsDiv>

                        <StyledProductsTotalDiv>Total price: {useCart().onTotalPrice()} $</StyledProductsTotalDiv>

                        <StyledContinueDiv onClick={handleShowCart}>
                            <StyledContinueButton>
                                Continue shopping
                            </StyledContinueButton>
                        </StyledContinueDiv>

                        <StyledSendOrder onClick={handleShowCart}>
                            <StyledSendOrderButton onClick={handleDeleteAllProducts}>
                                Send Order
                            </StyledSendOrderButton>
                        </StyledSendOrder>

                    </StyledCartDiv>
                </StyledRightSideDiv>
            </StyledShoppingCartDiv>
        </>

    )
}

export default ShoppingCart;


