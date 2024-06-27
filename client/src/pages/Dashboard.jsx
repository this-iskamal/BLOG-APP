import { useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      <div className="max-w-lg mx-auto p-3 w-full">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
}
