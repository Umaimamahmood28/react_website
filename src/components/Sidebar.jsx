import { Link } from "react-router-dom";
import "./slidebar.css";

function Sidebar() {
return (
    <div className="sidebar">

    <h2>Dashboard</h2>

    <ul>

        <li>
        <Link to="/">Overview</Link>
        </li>

        <li>
        <Link to="/inventory">Inventory</Link>
        </li>

        <li>
        <Link to="/settings">Settings</Link>
        </li>

    </ul>

    </div>
);
}

export default Sidebar;