import file from "../assets/file.png";
import success from "../assets/rating.png";
import pending from "../assets/wall-clock.png";
import interview from "../assets/interview.png";

import "./Dashboard.css";
import Card from "./Card";
import MainContent from "./MainContent";
import ApplicationTrackerSection from "./ApplicationTrackerSection";
const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <section className="side-navbar">
          <span>Logo</span> <p>JobTracker</p>
        </section>

        <section className="main-page">
          <div className="main-page-header">
            <div className="header-left">
              <h2 className="heading">Dashboard</h2>
              <p className="sub-heading">
                Track your job application and progress
              </p>
            </div>

            <button className="btn-add">
              <span className="btn-add-symbol"> + </span> Add Application
            </button>
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
