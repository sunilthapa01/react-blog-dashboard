import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Aut/Login";
import Layout from "./Layout";
import Notfound from "./NotFound";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Aut/ProtectedRoute";
import Myblog from "./Pages/Myblog";
import Blogs from "./Pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Myblog" element={<Myblog />} />
        <Route path="/ViewBlog" element={<Blogs/>}/>
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
