import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import Wrapper from '../../assets/wrappers/SharedLayout';
import {Navbar, smallSidebar, BigSidebar, SmallSidebar} from "../../components"


const SharedLayout = () => {
  return <nav>
    <main className="dashboard">
      <SmallSidebar />
      <BigSidebar />
      <div className="">

      </div>
    </main>
    <Outlet />
  </nav>;
};

export default SharedLayout;
