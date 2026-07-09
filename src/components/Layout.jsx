import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    
    <div className="layout">

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="sidebar-overlay show"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-content">
      <Header
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
/>
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
