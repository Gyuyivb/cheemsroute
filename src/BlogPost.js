import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } =useParams();

    const auth = useAuth();
    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const returnToBlog = () => {
        navigate('/blog'); 
        // navigate(-1);
    }

    return (
        <>
            <h1>{blogpost.title}</h1>
            <button onClick={returnToBlog}>Volver</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>

            {canDelete && (
                <button>Eliminar post</button>
            )}
        </>
    );
}


export { BlogPost };