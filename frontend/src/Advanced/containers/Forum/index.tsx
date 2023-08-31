import React from "react";
import Post from "./pages/Post";
import BlogHome from "./pages/BlogHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

const Forum: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
};

export default Forum;
