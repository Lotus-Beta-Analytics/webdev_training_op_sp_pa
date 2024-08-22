import React from "react";
import logo from "@/assets/lban-logo_white.png";
import { Link } from "react-router-dom";
import {
  File,
  GitGraph,
  LayoutDashboardIcon,
  LogOutIcon,
  LucideGitGraph,
} from "lucide-react";
import Layout from "@/layout";
import DashboardCard from "@/components/custom/DashboardCard";
// import logo from "../../../assets/lban-logo_white.png"

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <h2>Dasboard Page Content</h2>

      {/* card container */}
      <div className="grid grid-cols-3 gap-4">
        {/* card */}
        <DashboardCard
          title={"Total No of QC Requests"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No of Created Gates"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No of Created Conformance Level"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No of Created Stages"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No  of Created Status"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No Created Initiative Type"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No of Qa Engineers"}
          number={40}
          icon={<GitGraph />}
        />
        <DashboardCard
          title={"No of Created Criteria"}
          number={40}
          icon={<GitGraph />}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
