import "./Header.css";
import { FaBell } from "react-icons/fa";

function Header({ sidebarOpen, setSidebarOpen }) {
return (
    <div className="header">

    <button
        className="menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
    >
        ☰
    </button>

    <div className="search-box">
        <input
        type="text"
        placeholder="Search..."
        />
    </div>

    <div className="profile">
        <FaBell />

        <img
        src="https://i.pravatar.cc/100"
        alt="profile"
        />
    </div>

    </div>
);
}

export default Header;