import React from "react";

const data = [
    {
        title:'Sobre Cheems',
        slug: 'sobre-cheems',
        content: 'Cheems es lindo y tiene amsieda.',
        author: 'gyuyi',
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
        author: 'cheemsiano',
    },
    {
        title:'Los cheems son hermosos',
        slug: 'los-cheems-son-hermosos',
        content: 'Los shibas son perros hermososDejen de sacar isekais con harem porfavor.',
        author: 'gyuyi',
    },
    {
        title:'YA ESTOY CANSADA',
        slug: 'ya-estoy-cansada',
        content: 'Hola.',
        author: 'gyuyi',
    }
]

   
   function useBlogData () {
    const [ blogdata, setBlogData] = React.useState(data);

    const handleEdit = (slug, value) => {
        const newBlogs = [...blogdata];
        const blogIndex = newBlogs.findIndex(
            (blog) => blog.slug === slug
        );
        newBlogs[blogIndex].content = value;
        setBlogData(newBlogs);
    };
    
    const handleDelete = (slug) => {
        const newBlogs = [...blogdata.filter(blogdatus => blogdatus.slug !== slug)];
        setBlogData(newBlogs);
    };

    const handleAdd = (newData) => {
        // Solo agrega el objeto si los campos no están vacíos
          const newObject = {
            title: newData.title,
            slug:  newData.slug,
            content: newData.content,
            author:  newData.author,
           };
          setBlogData([...blogdata, newObject]); // Add the new object to the end of the list
       
      };

    return {
        blogdata,
        setBlogData,
        handleEdit,
        handleDelete,
        handleAdd,
    }
}

export { useBlogData };