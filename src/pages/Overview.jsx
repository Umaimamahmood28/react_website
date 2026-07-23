import "./Overview.css";

import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaBoxOpen,
} from "react-icons/fa";
const handleExport = () => {
  alert("Dashboard report exported successfully!");
};
function Overview() {
  return (
    <div className="overview-page">

      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        <button
  className="export-btn"
  onClick={handleExport}
>
  Export Report
</button>
      </div>

      <div className="cards">

        <div className="card">

          <div className="card-icon users-bg">
            <FaUsers className="icon" />
          </div>

          <div>
            <h3>Total Users</h3>
            <h2>1250</h2>
            <p className="growth positive">↑ +12% this month</p>
          </div>

        </div>

        <div className="card">

          <div className="card-icon revenue-bg">
            <FaDollarSign className="icon" />
          </div>

          <div>
            <h3>Revenue</h3>
            <h2>$25,000</h2>
            <p className="growth positive">↑ +18% this month</p>
          </div>

        </div>

        <div className="card">

          <div className="card-icon orders-bg">
            <FaShoppingCart className="icon" />
          </div>

          <div>
            <h3>Orders</h3>
            <h2>356</h2>
            <p className="growth positive">↑ +8% this week</p>
          </div>

        </div>

        <div className="card">

          <div className="card-icon products-bg">
            <FaBoxOpen className="icon" />
          </div>

          <div>
            <h3>Products</h3>
            <h2>150</h2>
            <p className="growth negative">↓ -2% this week</p>
          </div>

        </div>

      </div>

      <div className="activity-section">

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
                <td><span className="status active">Active</span></td>
              </tr>

              <tr>
                <td>Ahmed</td>
                <td>ahmed@gmail.com</td>
                <td><span className="status pending">Pending</span></td>
              </tr>

              <tr>
                <td>Sara</td>
                <td>sara@gmail.com</td>
                <td><span className="status active">Active</span></td>
              </tr>

              <tr>
                <td>Fatima</td>
                <td>fatima@gmail.com</td>
                <td><span className="status inactive">Inactive</span></td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Overview;