import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

        let postItems = posts.map( (item) => {
            return (
                <li className='list-group-item'>
                    <PostListItem  
                        label={item.label} 
                        important= {item.important} 
                    />
                </li>
            )
        });

    return (
        <ul className = "app-list list-group">
            {postItems}
        </ul>
    )
}

export default PostList;