import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { profiles } from "./profiledata";

function UserProfile ({ blogdata }) {
    const auth =useAuth();
    const { username } = useParams();

    const userProfile = profiles.find(profile => profile.username === username)
    //console.log('el slug: ', userProfile)

    const filteredPost = blogdata.filter(post => post.author === userProfile?.username)

    const blogsPosted = () => {
        if (filteredPost.length) {
            return (
                <>
                    {filteredPost.map(post =>(<BlogLink key={post.slug} post={post} />))}
                </>
            )
        } else {
            return (
                <p>No ha publicado nada aun</p>
            )
        }
    }
    console.log('el user:', username)

    if (!userProfile) {
        return(
            <>
            <h1>Parece que no hay nadie</h1>
            </>
        )
    }else {
        return (
            <>
                <h2>{userProfile.username}</h2>
                <p>{userProfile.role}</p>
                <p>Blogs publicados:</p>
                <ul>
                    {blogsPosted()}
                </ul>
            </>
        )
    }    
    
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}

export { UserProfile }