import { NavLink } from "react-router-dom";
import "./slidebar.css";

function Sidebar({ open, onClose }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/" onClick={onClose}>Overview</NavLink>
        </li>
        <li>
          <NavLink to="/inventory" onClick={onClose}>Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/settings" onClick={onClose}>Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;