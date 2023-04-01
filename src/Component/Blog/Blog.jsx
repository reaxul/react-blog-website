import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import './Blog.css'
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Posts
                        key={blog.id}
                        blog={blog}
                    ></Posts>)
                }
            </div>
            <div className='bookmarked'>
                <h3>
                    bookmarked
                </h3>
            </div>
        </div>
    );
};

export default Blog;