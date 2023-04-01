import React from "react";
import "./Post.css";
const Posts = (props) => {
  const { author, authorImage, coverImage, id, publishDate, readTime, title } =
        props.blog;
    const handleTime = props.handleTime;
    const handleBookmark = (blog) => {
        console.log(blog);
    }
  return (
    <div className="post-container">
      <div className="cover">
        <img src={coverImage} alt="" />
      </div>
      <div className="info">
        <div className="author">
          <div>
            <img src={authorImage} alt="" />
          </div>
          <div>
            <h3>{author}</h3>
            <small>{publishDate} (6 days ago)</small>
          </div>
        </div>
        <div className="read-time">
          <small>{readTime} min</small>
          <svg onClick={()=>handleBookmark(props.blog)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <h5 onClick={() => handleTime(props.blog)} className="mark">
          Mark as read
        </h5>
      </div>
      <hr />
    </div>
  );
};

export default Posts;
