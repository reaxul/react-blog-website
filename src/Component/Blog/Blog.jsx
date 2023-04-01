import React, { useEffect, useState } from 'react';
import Bookmarked from '../Bookmarked/Bookmarked';
import Posts from '../Posts/Posts';
import './Blog.css'
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [time,setTime]=useState(0)
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    }, [])
    const handleTime = blog => {
        const newTime = time + parseInt(blog.readTime);
        setTime(newTime);
    }
    return (
        <div className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Posts
                        key={blog.id}
                        blog={blog}
                        handleTime={handleTime}
                    ></Posts>)
                }
            </div>
            <div className='bookmarked'>
                <Bookmarked time={time}></Bookmarked>
            </div>
        </div>
    );
};

export default Blog;