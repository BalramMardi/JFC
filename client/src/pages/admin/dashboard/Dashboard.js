import "./dashboard.css";

import React from "react";
import AdminMenu from "../../AdminMenu";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* <AdminMenu /> */}
      {/* <div className="content">name</div> */}
      <React.Suspense fallback="Loading...">
        <Outlet />
      </React.Suspense>
    </div>
  );
}

export default Dashboard;
