import { Link } from "react-router-dom";
import "./slidebar.css";

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "show" : ""}`}>

      <h2>Dashboard</h2>

      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>

        <li>
          <Link to="/inventory">Inventory</Link>
        </li>

        <li>
          <Link to="/add-product">Add Product</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;