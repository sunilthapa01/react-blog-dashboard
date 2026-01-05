import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [Profile, setProfile] = useState({});
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const save = async () => {
      const showDetail = await localStorage.getItem("user");
      setProfile(JSON.parse(showDetail));
    };
    const BlogCount = async () => {
      const show = JSON.parse(localStorage.getItem("blog"));
      setCount(show.length);
    };
    save();
    BlogCount();
  }, []);

  return (
    <div>
      <div class="min-h-screen bg-gradient-to-br from-[#0B1026] to-[#0E1638] p-8 text-white">
        <div class="mb-8">
          <h1 class="text-2xl font-semibold">
            Welcome back,{" "}
            <span class="text-indigo-400 font-bold">{Profile.name}</span> !
          </h1>
          <p class="text-gray-400 mt-1">
            Here's what's happening with your blog today.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Total Blogs</p>
              <span class="text-gray-500 text-sm">📄</span>
            </div>
            <h2 class="text-3xl font-bold mt-4">{Count }</h2>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>

          <div class="flex flex-wrap gap-4">
            <button class=" cursor-pointer bg-indigo-500 hover:bg-indigo-600 transition px-5 py-2.5 rounded-lg text-sm font-medium" onClick={() => {
              navigate('/Myblog')
            }}>
              ✍️ Write New Blog
            </button>

            <button class=" cursor-pointer bg-white/10 hover:bg-white/20 transition px-5 py-2.5 rounded-lg text-sm text-gray-300" onClick={() => {
              navigate('/ViewBlog')
            }}>
              📚 View All Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
