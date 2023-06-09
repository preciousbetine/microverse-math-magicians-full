import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/calculate">Calculator</NavLink>
    <NavLink to="/quotes">Quote</NavLink>
  </nav>
);

export default Navbar;
