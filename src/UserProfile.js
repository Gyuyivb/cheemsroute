import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { useProfileData } from "./useProfileData";

function UserProfile ({ blogdata }) {
    const [content, setContent] = React.useState('');
    const [showInput, setShowInput] = React.useState(false);
    //Importing profile data
    const { 
        profileData: profiles,
        handleEdit: onEdit,
     } = useProfileData();
    
    const auth = useAuth();
    const { username } = useParams();
    const navigate = useNavigate();

    const userProfile = profiles.find(profile => profile.username === username)
    //console.log('el slug: ', userProfile)

    const filteredPost = blogdata.filter(post => post.author === userProfile?.username)
    const canEdit = auth.user?.isAdmin || userProfile.username === auth.user?.username;

    //Edit info
    const editWindow = () => {
        setShowInput(true);
    }
    const onCancel = () => {
        setShowInput(false);
    }
    const editPost = (event) => {
        setContent(event.target.value)
        console.log('fdsfdsf: ', content)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('contenido', userProfile.info)
        onEdit(userProfile.username, content)
        setShowInput(false);
    }


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
    // if (username === auth.user.username) {
        
    //     navigate('/profile')
    // }
    //console.log('el user:', username, auth.user.username)

    if (!userProfile) {
        return(
            <>
            <h1>Looks like this is empty</h1>
            </>
        )
    }else {
        return (
            <>
                <h2>{userProfile.username}'s profile</h2>
                <p>{userProfile.role}</p>
                <p>{userProfile.info}</p>
                {canEdit && (
                    <button onClick={() => editWindow()}>Edit info</button>     
                )}
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
                    </form>)}
                <p>Blogs published:</p>
                <ul>
                    {blogsPosted()}
                </ul>
            </>
        )
    }    
    
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}

export { UserProfile }