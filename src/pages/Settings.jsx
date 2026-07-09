import { useState } from "react";
import "./Settings.css";
import { FaUser, FaBell, FaLock, FaPalette, FaCheckCircle } from "react-icons/fa";

function Settings() {
  const [profile, setProfile] = useState({
    fullName: "UMAIMA",
    email: "umaimamahmood28@example.com",
    phone: "03142030662",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [theme, setTheme] = useState("Light");

  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div>
      <div className="settings-header">
        <h1 className="dashboard-title">Settings</h1>
        {saveSuccess && (
          <div className="success-message">
            <FaCheckCircle /> Changes saved successfully!
          </div>
        )}
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <div className="section-header">
            <FaUser className="section-icon" />
            <h2>Profile Settings</h2>
          </div>
          <div className="settings-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <FaBell className="section-icon" />
            <h2>Notifications</h2>
          </div>
          <div className="notification-options">
            <div className="notification-item">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
              />
            </div>
            <div className="notification-item">
              <span>SMS Alerts</span>
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
              />
            </div>
          </div>
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
