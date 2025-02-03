import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } =useParams();

    const returnToBlog = () => {
        navigate('/blog'); 
        // navigate(-1);
    }

    const blogpost = blogdata.find(post => post.slug === slug)
    return (
        <>
            <h1>{blogpost.title}</h1>
            <button onClick={returnToBlog}>Volver</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}


export { BlogPost };