import React from "react";
import { PRODUCTS } from "../../../Product";
import { Product } from "../shops/products.jsx";
import "./shops.css";

export const Shop = () => {
    return (
        <div classname="Shop">
            <div classname="shopTitle">
                <h1>Somya's Shop</h1>
            </div>
            <div className="products">
                {""}
                {PRODUCTS.map((product) => (
                    <Product data={product} />

                ))}
            </div>
        </div>
    )
}