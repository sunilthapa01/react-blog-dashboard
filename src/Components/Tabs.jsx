import React, { useEffect, useState } from "react";
import { LayoutDashboard } from "lucide-react";
import { Pencil } from "lucide-react";
import { BookText } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [Profile, setProfile] = useState({});
  useEffect(() => {
    const save = async () => {
      const showDetail = await localStorage.getItem("user");
      setProfile(JSON.parse(showDetail));
    };
    save();
  }, []);

  const isWrite = location.pathname === "/Myblog";
  const isBlog = location.pathname === "/ViewBlog";
  const isDashboard = location.pathname === "/Dashboard";

  return (
    <aside className="w-64 h-screen bg-[#0F172A] text-gray-300 flex flex-col">
      <div className="flex items-center gap-3 mb-4 p-4.5 border-b">
        <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-white font-bold">
          JD
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{Profile.name}</p>
          <p className="text-xs text-gray-400">{Profile.email}</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <div
          className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
            isDashboard ? "bg-[#4F46E5]" : "hover:bg-[#1E293B]"
          }`}
          onClick={() => {
            // setActive("dashboard");
            navigate("/Dashboard");
          }}
        >
          <span className="text-sm">
            <LayoutDashboard />
          </span>
          <span className="text-sm font-medium cursor-pointer">Dashboard</span>
        </div>

        <div
          className={`flex items-center gap-3 px-4 py-2 rounded-lg   text-white cursor-pointer ${
            isWrite ? "bg-[#4F46E5]" : ""
          }`}
          onClick={() => {
            // setActive("write");
            navigate("/Myblog");
          }}
        >
          <span className="text-sm">
            <Pencil />
          </span>
          <span className="text-sm font-medium">Write Blog</span>
        </div>

        <div
          className={`flex items-center gap-3 px-4 py-2 rounded-lg  cursor-pointer ${
            isBlog ? "bg-[#4F46E5]" : "hover:bg-[#1E293B]"
          }`}
          onClick={() => {
            navigate("/ViewBlog");
            // setActive("blog");
          }}
        >
          <span className="text-sm">
            <BookText />
          </span>
          <span className="text-sm font-medium">My Blog</span>
        </div>
      </nav>
    </aside>
  );
};

export default Tabs;
