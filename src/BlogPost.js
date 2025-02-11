import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPost({ blogdata, onDelete, onEdit }) {
    const [content, setContent] = React.useState('');
    const [showInput, setShowInput] = React.useState(false);

    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();
    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;
    const canEdit = auth.user?.isAdmin || auth.user?.isEditor || blogpost.author === auth.user?.username;
    
    //Edit/delete post
    const editWindow = () => {
        setShowInput(true);
    }
    const onCancel = () => {
        setShowInput(false);
    }
    const editPost = (event) => {
        setContent(event.target.value)
    }
    const handleDelete = (blogslug) => {
        onDelete(blogslug);
        navigate('/blog');
    }

    //Actualizando
    const onSubmit = (event) => {
        event.preventDefault();
        onEdit(blogpost.slug, content)
        setShowInput(false);
    }

    const returnToBlog = () => {
        navigate('/blog'); 
        // navigate(-1);
    }

    return (
        <>
            <h1>{blogpost.title}</h1>
            <button onClick={returnToBlog}>Volver</button>
            <p>Autor: {blogpost.author}</p>
            <p>{blogpost.content}</p>

            {canDelete && (
                <button
                onClick={() => handleDelete(blogpost.slug)}>Eliminar post</button>
            )}
            {canEdit && (
                <button
                onClick={() => editWindow()}>Editar post</button>
            )}
            {showInput && (
                 <form onSubmit={onSubmit}>
                 <textarea 
                 value={content}
                 onChange={editPost}/>
                 <div>
                    <button type="button"
                        onClick={onCancel} >Cancel</button>
                    <button type="submit">Actualizar</button>
                </div>
                 </form>
            )}
            
        </>
    );
}


export { BlogPost };