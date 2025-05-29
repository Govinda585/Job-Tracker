import "./Dashboard.css";
import "./Analytics.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Analytics = () => {
  const pieData = {
    labels: ["Applied", "Interview", "Offer", "Rejected"],
    datasets: [
      {
        data: [12, 5, 3, 4],
        backgroundColor: ["#2463eb", "#facc15", "#22c55e", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Applications",
        data: [3, 5, 7, 6, 8],
        backgroundColor: "#2463eb",
      },
    ],
  };
  return (
    <div>
      <div className="dashboard">
        <section className="main-page">
          <div className="main-page-header">
            <div className="header-left">
              <h2 className="heading">Analytics</h2>
              <p className="sub-heading">
                Track your job application and progress
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="analytics-page">
            <div className="chart-grid">
              <div className="chart-container">
                <h3>Status Breakdown</h3>
                <Pie data={pieData} />
              </div>

              <div className="chart-container">
                <h3>Applications Over Time</h3>
                <Bar data={barData} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
