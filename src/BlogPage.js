import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPage({ blogdata }) {
    const auth = useAuth();
    const navigate = useNavigate();

    const canAdd = auth.user?.isAdmin || auth.user?.isEditor;

    const handleAdd = () => {
        navigate('/add-post')
    }
    return (
        <>
            <h1>Blog</h1>
            <Outlet />
            <ul>
                {blogdata.map(post =>(
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>
            {canAdd && (
                <button
                onClick={() => handleAdd()}>Agregar post</button>
            )}
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

export { BlogPage };