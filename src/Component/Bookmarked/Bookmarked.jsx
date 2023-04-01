import React from "react";
import "./Bookmarked.css";
const Bookmarked = (props) => {
  return (
    <div>
      <div className="spent-time">
        <h3>Spent time on read : {props.time} min</h3>
      </div>
      <div className="bookmark-container">
        <h3>Bookmarked Blogs: {props.bookmark.length}</h3>
        {props.bookmark.map((eachBookmark, index) => (
          <div key={index} className="bookmark-item">
            <h4>{eachBookmark.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
import "./Bookmarked.css";
export default Bookmarked;
