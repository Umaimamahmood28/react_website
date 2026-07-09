import "./Overview.css";

import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaBoxOpen,
} from "react-icons/fa";

function Overview() {
  return (
    <div>
      <h1 className="dashboard-title">
        Dashboard Overview
      </h1>
      <div className="cards">

        <div className="card">
          <FaUsers className="icon users" />
          <h3>Total Users</h3>
          <h2>1250</h2>
        </div>

        <div className="card">
          <FaDollarSign className="icon revenue" />
          <h3>Revenue</h3>
          <h2>$25,000</h2>
        </div>

        <div className="card">
          <FaShoppingCart className="icon orders" />
          <h3>Orders</h3>
          <h2>356</h2>
        </div>

        <div className="card">
          <FaBoxOpen className="icon products" />
          <h3>Products</h3>
          <h2>150</h2>
        </div>

      </div>

      <h2 className="table-title">
        Recent Activity
      </h2>

      <div className="table-wrapper">
        <table className="activity-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Ali</td>
              <td>ali@gmail.com</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Ahmed</td>
              <td>ahmed@gmail.com</td>
              <td className="pending">Pending</td>
            </tr>

            <tr>
              <td>Sara</td>
              <td>sara@gmail.com</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Fatima</td>
              <td>fatima@gmail.com</td>
              <td className="inactive">Inactive</td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Overview;
