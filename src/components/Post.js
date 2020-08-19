import React from 'react';
import { Link } from 'react-router-dom'

export const Posts = ({post})=>(
    <article>
        <h2>Player Name: {post.first_name} {post.last_name}, Player Height: {post.height_feet}, Team City Play For: {post.team.city}</h2>
        <p>Player ID: {post.id}</p>
        
        {/* <p>{post.body.substring(0,100)}</p> */}

        {/* <Link to={`/posts/${post.id}`} className="post-button">
        Back to Main page
      </Link> */}
 
    </article>
    
)