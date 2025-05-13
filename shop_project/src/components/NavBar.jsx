import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    const cart = useSelector(state => state.cart.cartList);
    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container-fluid">
                <NavLink className={({ isActive }) => (isActive ? "navbar-brand text-white active" : "navbar-brand text-white")} to="/">MyKitchen</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link text-white active" : "nav-link text-white")} to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link text-white active" : "nav-link text-white")} to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link text-white active" : "nav-link text-white")} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart">
                                <IconButton color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCartIcon sx={{ color: 'white' }} />
                                    </Badge>
                                </IconButton>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
