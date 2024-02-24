import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart"><CiShoppingCart /></Link>
            </div>
        </div>
    );
};

