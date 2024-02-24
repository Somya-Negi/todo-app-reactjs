import React, {useContext} from "react";
import {PRODUCTS} from "../../../Product.jsx";
import { Product } from "../shops/products.jsx";
import { ShopContext } from "../../../context/shop-context.jsx";
import { CartItem } from "./cart-item.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate();

    return (
        <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
         {PRODUCTS.map((Product) => {
            if (cartItems[Product.id] !== 0){
                return <CartItem data={Product} />;
            }
         })}

         </div>
        {totalAmount>0 ? (
         <div className="checkout">
         <p>Subtotal: ${totalAmount}</p>
         <button onClick={() => navigate("/")}>Continue Shopping</button>
         <button>Checkout</button>
         </div>
     ) :( <h1>Your Cart Is Empty</h1>
    )}
        
      
    </div>
    );
 
};