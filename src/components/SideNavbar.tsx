import dashboardIcon from "../assets/dashboard.png";
import setting from "../assets/setting.png";
import application from "../assets/cv.png";
import analytics from "../assets/statistic.png";
import suitcase from "../assets/suitcase.png";

import "./SideNavbar.css";
import { useNavigate } from "react-router-dom";
type NavbarProps = {
  icon: string;
  name: string;
  route: string;
};
const SideNavbar = () => {
  return (
    <div>
      <section className="logo-section">
        <img className="side-navbar-logo-img" src={suitcase} alt="Logo" />{" "}
        <p>JobTracker</p>
      </section>
      <SingleNavbar icon={dashboardIcon} name="Dashboard" route="/dashboard" />
      <SingleNavbar
        icon={application}
        name="Applications"
        route="/applications"
      />
      <SingleNavbar icon={analytics} name="Analytics" route="/analytics" />
      <SingleNavbar icon={setting} name="Settings" route="/settings" />
    </div>
  );
};

export default SideNavbar;

const SingleNavbar = ({ icon, name, route }: NavbarProps) => {
  const navigation = useNavigate();
  return (
    <div className="sidebar" onClick={() => navigation(route)}>
      <img className="sidebar-img" src={icon} />
      <p>{name}</p>
    </div>
  );
};
