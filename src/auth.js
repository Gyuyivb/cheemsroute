import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ['cheems', 'anvorgueso', 'gyuyi'];
const editList = ['cheemsiano', 'perrosalchicha', 'sadcat'];

const AuthContext = React.createContext();

function AuthProvider ({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    
    const login = ({ username }) => {
        const isAdmin = adminList.find(admin => admin === username)
        const isEditor = editList.find(editor => editor === username)
        setUser({ username, isAdmin, isEditor });
        navigate('/profile');
    }
    const logout = () => {
        setUser(null);
        navigate('/');
    }
    const auth = { user, login, logout };
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth () {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthAdd (props) {
    const auth = useAuth();
    if (!auth.user?.isAdmin && !auth.user?.isEditor) {
        return <Navigate to="/blog"/> 
    }
    return props.children
}

function AuthRoute (props) {
    const auth =useAuth();
    
        if (!auth.user) {
            return <Navigate to="/login"/> 
        }

        return props.children
};

export {
    AuthProvider,
    AuthRoute,
    useAuth,
    AuthAdd,
};