import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";
//import Blog from "../../../pages/Blog";
// Importing the Blog type from the BlogItem file (assuming they're in the same directory)
import { BlogData } from "./BlogItem";

// We'll use this interface to type the blogs prop
interface BlogListProps {
  blogs: BlogData[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
