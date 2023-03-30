import React from 'react';
import Navbar from '@/components/Navbar';
import Styles from '@/styles/Header.module.scss';

const Header = () => (
  <header className={Styles.header}>
    <h1>Math Magicians</h1>
    <Navbar />
  </header>
);

export default Header;
