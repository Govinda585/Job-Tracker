import file from "../assets/file.png";
import success from "../assets/rating.png";
import pending from "../assets/wall-clock.png";
import interview from "../assets/interview.png";

import "./Dashboard.css";
import Card from "../components/Card";
import MainContent from "../components/MainContent";
import ApplicationTrackerSection from "../components/ApplicationTrackerSection";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [logout, setLogout] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/settings");
  };
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLogout(true);
    navigate("/");
  };
  return (
    <div>
      <div className="dashboard">
        <section className="main-page">
          <div className="main-page-header">
            <div className="header-left">
              <h2 className="heading">Dashboard</h2>
              <p className="sub-heading">
                Track your job application and progress
              </p>
            </div>
            <div className="header-right">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <Button btnName="Profile" fun={handleProfile} />
              <Button btnName="LogOut" fun={handleLogout} bgColor="#dc3545" />
            </div>
          </div>
          {/* Content */}
          <div className="card-section">
            <Card
              title="Total Application"
              price="0"
              subtitle="+12% from last month"
              icon={file}
            />
            <Card
              title="Pending"
              price="0"
              subtitle="+3% from last month"
              icon={pending}
            />
            <Card
              title="Interviews"
              price="0"
              subtitle="+2% from last month"
              icon={interview}
            />
            <Card
              title="Success Rate"
              price="0%"
              subtitle="+4% from last month"
              icon={success}
            />
          </div>
          <MainContent />
          <ApplicationTrackerSection />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
