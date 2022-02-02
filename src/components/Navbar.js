import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./logo";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = useAppContext();
  const [showLogout, setShowLogOut] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogOut(!showLogout)}
          >
            <FaUserCircle /> 
              {user?.name}
            <FaCaretDown />
          </button>
          <div className={ showLogout ?"dropdown show-dropdown" : "dropdown"}>
            <button
              onClick={logoutUser}
              className="dropdown-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
