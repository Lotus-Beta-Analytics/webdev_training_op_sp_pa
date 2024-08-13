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
// import logo from "../../../assets/lban-logo_white.png"

const Layout = ({ children }) => {
  return (
    <div className="flex h-full">
      {/* site navigation bar */}
      <div className="flex flex-col bg-primary w-12-sm w-1/6 h-full items-center py-12">
        <img src={logo} width={64} />
        <nav className="flex flex-col gap-2 w-full text-white py-32">
          <Link
            to={"/dashboard"}
            className="py-3 pl-8 hover:bg-[#FFFFFF42] hover:border-l-4"
          >
            <div className="flex gap-2 items-center">
              <LayoutDashboardIcon /> Dashboard
            </div>
          </Link>
          <Link
            to={"/initiatives"}
            className="py-3 pl-8 hover:bg-[#FFFFFF42] hover:border-l-4"
          >
            <div className="flex gap-2 items-center">
              <File /> Initiatives
            </div>
          </Link>
          <Link
            to={"/report"}
            className="py-3 pl-8 hover:bg-[#FFFFFF42] hover:border-l-4"
          >
            <div className="flex gap-2 items-center">
              <LucideGitGraph /> Report
            </div>
          </Link>
          <Link
            to={"/"}
            className="mt-8 py-3 pl-8 hover:bg-[#FFFFFF42] hover:border-l-4"
          >
            <div className="flex gap-2 items-center">
              <LogOutIcon /> Logout
            </div>
          </Link>
        </nav>
      </div>
      <div className="w-full p-4">
        {/* site header */}
        <div className="flex justify-between mb-8">
          <h3 className="text-3xl font-medium">Dashboard</h3>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 border-2 border-green-100 rounded-full bg-green-500"></div>
            <h5 className="text-lg font-medium">Hi John!</h5>
            <span className="text-[#0000003D]">|</span>
            <p className="text-[#070707B2]">It’s nice seeing you again!</p>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
