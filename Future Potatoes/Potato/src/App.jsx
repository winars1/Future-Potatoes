import './App.css'

import Home from "../public/home.jsx";
import Prices from "../public/prices.jsx";
import Facts from "../public/facts.jsx";
import CompanyHistory from "../public/CompanyHistory.jsx";
import ContactNow from "../public/contactNow.jsx";
import Footer from "../public/footer.jsx"
import ShoppingCart from "../public/shoppingCart.jsx"

import {CartProvider} from "../public/cartContext.jsx";

function App() {


    return (
        <CartProvider>
            <ShoppingCart/>
            <Home/>
            <Prices/>
            <Facts/>
            <CompanyHistory/>
            <ContactNow/>
            <Footer/>
        </CartProvider>
    )
}

export default App
