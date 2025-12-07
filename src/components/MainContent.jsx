import './maincontent.css'
import { Outlet } from "react-router-dom";
export default function MainContent() {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
}
