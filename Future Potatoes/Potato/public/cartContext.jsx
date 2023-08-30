import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

function CartProvider({children}){

    const [cartItems, setCartItems] = useState([]);


    function handleAddCartItem(item) {
        console.log("Added in context")
        if (cartItems.some((cartItem) => cartItem.name === item.name)) {
            console.log("Item already in cart");
            return;
        }
        setCartItems((items) => [item, ...items]);
    }

    function handleClearCartItems() {
        setCartItems([]);
    }
    function totalPrice(){
        let totalPrice = 0;

        cartItems.map((el) => (
            totalPrice += el.price
        ));
        return totalPrice;
    }

    function totalProducts(){
        let totalProducts = 0;

        cartItems.map((el) => (
            totalProducts++
        ));
        return totalProducts;
    }
    function deleteItem(item){
        setCartItems((prevCartItems) => {
            const indexToDelete = prevCartItems.findIndex((cartItem) => cartItem === item);

            if (indexToDelete === -1) {
                console.error("Item not found in cart.");
                return prevCartItems;
            }

            const updatedCartItems = [
                ...prevCartItems.slice(0, indexToDelete),
                ...prevCartItems.slice(indexToDelete + 1),
            ];

            return updatedCartItems;
        });
    }

    const value = useMemo(() => {
        return {
            cartItems: cartItems,
            onTotalProducts: totalProducts,
            onDeleteItem: deleteItem,
            onAddCartItems: handleAddCartItem,
            onClearCartItems: handleClearCartItems,
            onTotalPrice: totalPrice
        };
    }, [cartItems, totalPrice, totalProducts]);

    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    );
}

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined)
        throw new Error("CartContext was used outside of the CartProvider");
    return context;
}

export { CartProvider, useCart };