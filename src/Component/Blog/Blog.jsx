import React, { useEffect, useState } from "react";
import Bookmarked from "../Bookmarked/Bookmarked";
import Posts from "../Posts/Posts";
import { ToastContainer, toast } from "react-toastify";

import "./Blog.css";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [time, setTime] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleTime = (blog) => {
    const newTime = time + parseInt(blog.readTime);
    setTime(newTime);
  };
    const handleBookmark = (blog) => {
        console.log(bookmark.indexOf(blog));
    bookmark.indexOf(blog)+1 && toast("Already bookmarked!");
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };
  return (
    <div className="blog-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <Posts
            key={blog.id}
            blog={blog}
            handleTime={handleTime}
            handleBookmark={handleBookmark}
          ></Posts>
        ))}
      </div>
      <div className="bookmarked">
        <Bookmarked time={time} bookmark={bookmark}></Bookmarked>
      </div>
    </div>
  );
};

export default Blog;
