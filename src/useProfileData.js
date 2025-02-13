import React from "react";

const profiles = [
    {
        username:'gyuyi',
        role: 'Admin',
        info: 'Master de masters, la og y creadora',
    },
    {
        username:'cheems',
        role: 'Admin',
        info: 'Selfmade chef, his specialty is anxiety',
    },
    {
        username:'anvorgueso',
        role: 'Admin',
        info: 'Is always lost, even in his house. Has an anvorger',
    },
    {
        username:'cheemsiano',
        role: 'Editor',
        info: 'Loves plants, nut his anxiety can kill a cactus',
    },
    {
        username:'perrosalchicha',
        role: 'Editor',
        info: 'She`s a queen, everybody loves her',
    },
    {
        username:'sadcat',
        role: 'Editor',
        info: 'He lost control of his life',
    }
]
function useProfileData () {
    const [ profileData, setProfileData] = React.useState(profiles);

    const handleEdit = (username, value) => {
        const newBlogs = [...profileData];
        const blogIndex = newBlogs.findIndex(
            (blog) => blog.username === username
        );
        newBlogs[blogIndex].info = value;
        setProfileData(newBlogs);
    };

    const handleAdd = (newData) => {
        // Solo agrega el objeto si los campos no están vacíos
          const newObject = {
            username: newData.username,
            role: newData.role,
            info: newData.info,
           };
           setProfileData([...profileData, newObject]); // Add the new object to the end of the list
           console.log('contenido', profileData.info)
      };

    return {
        profileData,
        setProfileData,
        handleEdit,
        handleAdd,
    }
}
 

export { useProfileData };