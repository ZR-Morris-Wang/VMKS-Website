import React, { useState } from "react";
import style from "styled-components";
import { BlogContainer } from "./styles";

import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import EmptyList from "../../components/Common/Empty";

const BlogHome: React.FC = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchValue, setSearchValue] = useState("");

  // const handleSearchInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSearchValue(event.target.value);
  // };

  const clearSearchInput = () => {
    setBlogs(blogList);
    setSearchValue("");
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleSearchResults();
    // Handle your form submission logic here
  };

  // //search blogs by category
  // const handleSearchResults = () => {
  //   const allBlogs = blogList;
  //   const filteredBlogs = allBlogs.filter((blog) =>
  //     blog.category.toLowerCase().includes(searchValue.toLowerCase().trim())
  //   );

  //   setBlogs(filteredBlogs);
  // };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //for useState of blogs

  //search submit function

  return (
    <BlogContainer>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar
        value={searchValue}
        handleSearchKey={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        clearSearch={clearSearchInput}
        formSubmit={handleSubmit}
      />
      {/* Blog List/Empty List */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </BlogContainer>
  );
};

export default BlogHome;
