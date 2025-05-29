import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginSignup";
import SideNavbar from "./components/SideNavbar";
import Applications from "./pages/Applications";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function AppLayout() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/";

  if (hideSidebar) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1.5", borderRight: "2px solid #e0e0e0" }}>
        <SideNavbar />
      </div>

      <div style={{ flex: "8.5" }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
