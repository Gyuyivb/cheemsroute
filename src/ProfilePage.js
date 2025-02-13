import React from "react";
import { useAuth } from "./auth";
import { Link } from "react-router-dom";
import { useProfileData } from "./useProfileData";

function ProfilePage({ blogdata }) {
    const [content, setContent] = React.useState('');
    const [showInput, setShowInput] = React.useState(false);
    const auth =useAuth();

    //Importing profile data
    const { 
        profileData: profiles,
        handleEdit: onEdit,
        handleAdd: newUser,
    } = useProfileData();
    
    //New state for new user
    const [newData, setNewData] = React.useState({ username: auth.user?.username, role: '', info: ''});

    const userProfile = profiles.find(profile => profile.username === auth.user.username)
    const filteredPost = blogdata.filter(post => post.author === auth.user.username)

    const blogsPosted = () => {
        if (filteredPost.length) {
            return (
                <>
                    {filteredPost.map(post =>(<BlogLink key={post.slug} post={post} />))}
                </>
            )
        } else {
            return (
                <p>No posts yet</p>
            )
        }
    }

    //Edit info
    const editWindow = () => {
        setShowInput(true);
    }
    const onCancel = () => {
        setShowInput(false);
    }
    const editPost = (event) => {
        setContent(event.target.value)
        console.log('fswa: ', content)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!auth.user.username) {
            setNewData((prev) => ({
                ...prev,
                info: content,
            }))
            newUser(newData);
        }else {
            onEdit(userProfile.username, content)
        }
        setShowInput(false);
        
    }
    console.log('gfdgfdgfdgfsg: ', userProfile)
    return (
        <>
            <h1>Profile</h1>
            <p>Welcome, {auth.user.username}</p>
            <p>{userProfile?.role}</p>
            <p>{userProfile?.info}</p>
            
            <button onClick={() => editWindow()}>Edit info</button>     
            {showInput && (
                <form onSubmit={onSubmit}>
                <textarea 
                    value={content}
                    onChange={editPost}/>
                <div>
                    <button type="button"
                        onClick={onCancel} >Cancel</button>
                    <button type="submit">Update</button>
                </div>
                </form>)
            }
            <p>Blogs published: </p>
             <ul>
                {blogsPosted()}
            </ul>    
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



export { ProfilePage };