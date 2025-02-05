import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function AddPost ({ onAdd }) {
    const navigate = useNavigate();
    const auth = useAuth();
    const [showInput, setShowInput] = React.useState(false);

    const [newData, setNewData] = React.useState({ title: '', slug: '', content: '', author: auth.user?.username });
    // setNewData({
    //     author: auth.user?.username,
    // })
    
    const onCancel = () => {
        setShowInput(false);
        console.log(showInput)
        navigate('/blog');
    }

    const getSlug = (event) => {
        let newSlug = event.target.value;
        newSlug = newSlug.toLowerCase().replace(/[\s,\.]+/g, '-');
        console.log('el slug: ', newSlug)
           setNewData({
                ...newData,
                slug: newSlug,})
    }

    const handleOnChange = (event) => {
        setNewData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('lo datoo: ', newData)
    }
    
    return(
        <>
        <form onSubmit={onSubmit}>
            <label for="title">Titulo:</label>
            <input type="text"name="title"
            value={newData.title}
            onChange={handleOnChange} />
            <label for="slug">Ruta:</label>
            <input type="text"name="slug" 
            value={newData.slug}
            onChange={getSlug}/>
            <label>Contenido</label>
            <textarea
            name="content"
            value={newData.content}
            onChange={handleOnChange}
             ></textarea>
             <button type="button"
             onClick={onCancel} >Cancel</button>
             <button type="submit">Postear</button>
        </form>
        </>
    );
}

export { AddPost }