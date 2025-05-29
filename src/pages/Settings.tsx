import "./Dashboard.css"; // Layout styles
import "./Settings.css"; // Form styles

const Settings = () => {
  return (
    <div className="dashboard">
      <section className="main-page">
        {/* Header */}
        <div className="main-page-header">
          <div className="header-left">
            <h2 className="heading">Settings</h2>
            <p className="sub-heading">
              Manage your profile, password, and preferences
            </p>
          </div>
        </div>

        {/* Settings Content */}
        <div className="settings-container">
          <div className="settings-section">
            <h3>Profile Info</h3>
            <div className="form-group">
              <label>Name</label>
              <input type="text" value="John Doe" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value="john@example.com" disabled />
            </div>
          </div>

          <div className="settings-section">
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" />
            </div>
          </div>

          <div className="settings-section">
            <h3>Preferences</h3>
            <label>
              <input type="checkbox" /> Enable Dark Mode
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
