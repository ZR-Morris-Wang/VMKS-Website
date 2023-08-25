import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogList } from "../../config/data";
import Chip from "../../components/Common/Chip";
import EmptyList from "../../components/Common/Empty";
import "./styles.css";
import { BlogData } from "../../components/Home/BlogList/BlogItem";

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        let foundBlog = blogList.find((blog) => blog.id === parsedId);
        if (foundBlog) {
          setBlog(foundBlog);
        }
      }
      // Ensure id exists
      //let foundBlog = blogList.find((blog) => blog.id === parseInt(id));
    }
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/forum">
        <span>&#8592;</span> Go Back
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
