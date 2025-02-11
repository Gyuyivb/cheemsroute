import React from "react";
import { useAuth } from "./auth";
import { Link } from "react-router-dom";

function ProfilePage({ blogdata }) {
    const auth =useAuth();
    
    const filteredPost = blogdata.filter(post => post.author === auth.user.username)

    const blogsPosted = () => {
        if (filteredPost.length) {
            return (
                <>
                    {filteredPost.map(post =>(<BlogLink key={post.slug} post={post} />))}
                </>
            )
        } else {
            return (
                <p>No has publicado nada aun</p>
            )
        }
    }
    
    return (
        <>
            <h1>Profile</h1>
            <p>Welcome, {auth.user.username}</p> 

            <p>Blogs publicados: </p>
             <ul>
                {blogsPosted()}
            </ul>    
        </>
    );
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}



export { ProfilePage };