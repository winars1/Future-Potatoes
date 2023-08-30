import styled from 'styled-components';
import {CartProvider, useCart} from "./cartContext.jsx";

const StyledCartProductDiv = styled.div`
    width: 93%;
    height: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
    border: grey calc((0.2vh + 0.2vw) / 2) solid;
    overflow: hidden;
    border-radius: calc((0.4vh + 0.4vw) / 2);
`
const StyledLeftSideDiv = styled.div`
    width: 15%;
    height: 100%;
    //background-color: #646cff;
`
const StyledRightSideDiv = styled.div`
    width: 85%;
    height: 100%;
    display: flex;

`
const StyledPriceDiv = styled.div`
    font-weight: 600;
    font-size: calc((1.25vh + 1.25vw) / 2);
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledDeleteProduct = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: calc((0.6vh + 0.6vw) / 2);
`
const StyledDeleteButton = styled.button`
    width: 75%;
    height: 50%;
    color: white;
    font-size: calc((1.1vh + 1.1vw) / 2);
    font-weight: bolder;
    background-color: red;
    border: none;
    border-radius: calc((0.5vh + 0.5vw) / 2);
    transition: 0.6s;
    &:hover {
      color: red;
      background-color: white;
      box-shadow: rgb(250, 6, 108) 0px 10px 20px -10px;
      width: 81%;
      height: 59%;
      font-size: calc((1.25vh + 1.25vw) / 2);
  }
`
const StyledProduct = styled.div`
    height: 100%;
    width: 100%;
`
const StyledPriceDeleteDiv = styled.div`
    height: 100%;
    width: 25%;
`
const StyledNameDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: calc((1.4vh + 1.4vw) / 2);
    color: #efe1e1;
    padding-top: 2%;
    height: 20%;
    width: 100%;
`
const StyledDescriptionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc((1.3vh + 1.3vw) / 2);
    width: 100%;
    height: 60%;
`
const StyledImg = styled.img`
    padding-top: 18%;
    height: calc((5.5vh + 5.5vw) / 2);
`
function CartProduct({product}){
    const { onDeleteItem } = useCart();
    const handleDeleteProduct = () => {
        onDeleteItem(product);
    };

    return(
        <StyledCartProductDiv>

            <StyledLeftSideDiv>
                <StyledImg src={product.images}/>
            </StyledLeftSideDiv>

            <StyledRightSideDiv>

                <StyledProduct>
                    <StyledNameDiv>
                        {
                            product.name
                        }
                    </StyledNameDiv>
                    <StyledDescriptionDiv>
                        {
                            product.description.join(', ')
                        }
                    </StyledDescriptionDiv>
                </StyledProduct>

                <StyledPriceDeleteDiv>
                    <StyledPriceDiv>
                        Price: {product.price} $
                    </StyledPriceDiv>
                    <StyledDeleteProduct onClick={handleDeleteProduct}>
                        <StyledDeleteButton>
                            Delete
                        </StyledDeleteButton>
                    </StyledDeleteProduct>
                </StyledPriceDeleteDiv>

            </StyledRightSideDiv>

        </StyledCartProductDiv>
    )
}

export default CartProduct;


