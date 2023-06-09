import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "./style.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main className="surface">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
