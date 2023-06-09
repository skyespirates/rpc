import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "./style.css";
import { useState } from "react";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <Header />
      <Sidebar active={isActive} />
      <main className="surface">
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className="surface__toggle"
        >
          {isActive ? <RiArrowRightSLine /> : <RiArrowLeftSLine />}
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
