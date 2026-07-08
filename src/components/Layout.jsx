import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">

      <Sidebar open={sidebarOpen} />

      <div className="main-content">

        <Header />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;