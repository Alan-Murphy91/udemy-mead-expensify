import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <h1>Welcome to my Portfolio site</h1>
    </div>
);

export default Header;