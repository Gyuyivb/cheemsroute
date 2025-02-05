import React from "react";

function AddPost () {

    return(
        <>
        <form>
            <label for="title">Titulo:</label>
            <input type="text"name="title" />
            <label>Contenido</label>
            <textarea
            //  value={content}
            //  onChange={editPost}
             ></textarea>
        </form>
        </>
    );
}

export { AddPost }