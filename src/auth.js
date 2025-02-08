import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const adminList = ['cheems', 'anvorgueso', 'gyuyi'];
const editList = ['cheemsiano', 'perrosalchicha', 'sadcat'];

const AuthContext = React.createContext();

function AuthProvider ({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    const location = useLocation();
    const from = location.state?.from || "/";
    
    const login = ({ username }) => {
        const isAdmin = adminList.find(admin => admin === username)
        const isEditor = editList.find(editor => editor === username)
        setUser({ username, isAdmin, isEditor });
        if (!auth.user?.isAdmin && !auth.user?.isEditor){
            navigate('/profile')
        }else {
            navigate(from, { replace: true });
        }
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
    const location = useLocation();

    if (!auth.user && !auth.user?.isAdmin && !auth.user?.isEditor) {
        return <Navigate to = "/login" state={{ from: location }} replace />
    }else {
        return <Navigate to = "/blog" />
    }
    return props.children
}

function AuthRoute (props) {
    const auth = useAuth();
    const location = useLocation();

        if (!auth.user) {
            return <Navigate to = "/login" state={{ from: location }} replace />
        }
        return props.children
};

export {
    AuthProvider,
    AuthRoute,
    useAuth,
    AuthAdd,
};