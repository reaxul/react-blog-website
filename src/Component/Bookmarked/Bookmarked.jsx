import React from 'react';
import './Bookmarked.css'
const Bookmarked = (props) => {
    return (
        <div>
            <div className='spent-time'>
                <h3>Spent time on read : {props.time} min</h3>
            </div>
            <div className='bookmark-container'>
                <h3>Bookmarked Blogs: </h3>
                <div className='bookmark-item'>
                </div>
            </div>
        </div>
    );
};
import './Bookmarked.css'
export default Bookmarked;