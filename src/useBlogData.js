import React from "react";

const data = [
    {
        title:'Sobre Cheems',
        slug: 'sobre-cheems',
        content: 'Cheems es lindo y tiene amsieda.',
        author: 'Gyuyi',
    },
    {
        title:'La amsieda de cheems',
        slug: 'la-amsieda-de-cheems',
        content: 'El tiene amsieda a la hora de ordenar una anvorguesa.',
        author: 'cheems',
    },
    {
        title:'La anvorguesa',
        slug: 'la-anvorguesa',
        content: 'Es deliciosa, pero la cajera asusta a cheems.',
        author: 'juan',
    }
]

   
   function useBlogData () {
    const [ blogdata, setBlogData] = React.useState(data);
    const [ addBlog, setAddBLog] = React.useState({ title: '', content: ''});

    const handleEdit = (slug, value) => {
        const newBlogs = [...blogdata];
        const blogIndex = newBlogs.findIndex(
            (blog) => blog.slug == slug
        );
        newBlogs[blogIndex].content = value;
        setBlogData(newBlogs);
    };
    
    const handleDelete = (slug) => {
        const newBlogs = [...blogdata.filter(blogdatus => blogdatus.slug !== slug)];
        setBlogData(newBlogs);
    };

    const handleAdd = () => {
        // Solo agrega el objeto si los campos no están vacíos
        // if (addBlog.title && addBlog.content) {
        //   const newObject = {
        //     slug: blogdata.length + 1, // Genera un nuevo ID (puedes usar otro sistema de IDs si prefieres)
        //     title: addBlog.title,
        //     content: parseInt(addBlog.edad), // Convierte la edad a número
        //   };
        //   setBlogData([...blogdata, newObject]); // Agrega el nuevo objeto al final de la lista
        //   setAddBLog({ title: '', content: '' }); // Limpia los campos del formulario
        // } else {
        //   alert('Por favor, completa ambos campos.');
        // }
      };

    return {
        blogdata,
        setBlogData,
        handleEdit,
        handleDelete
    }
}

export { useBlogData };