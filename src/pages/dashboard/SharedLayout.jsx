import { Outlet, Link } from "react-router-dom";
import React from "react";
import Wrapper from "../../assets/wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
} from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div className="">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
