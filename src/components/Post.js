import React from 'react';
import { Link } from 'react-router-dom'

export const Posts = ({post})=>(
    <article>
        <h2>{post.first_name} {post.last_name}</h2>
        <p>{post.id}</p>
        
        {/* <p>{post.body.substring(0,100)}</p> */}

        {/* <Link to={`/posts/${post.id}`} className="post-button">
        View Post
      </Link> */}
 
    </article>
    
)