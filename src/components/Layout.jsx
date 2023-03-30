import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Styles from '@/styles/Layout.module.scss';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={Styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
