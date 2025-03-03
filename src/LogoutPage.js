import React from "react";
import { useAuth } from "./auth";

function LogoutPage () {
    const auth = useAuth();
    // const auth = useContext(AuthContext)

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return (
        <>
            <h1>LOGOUT</h1>

            <form onSubmit={logout}>
                <label>Quieres salir?</label>

                <button type="submit">Salir</button>
            </form>
        </>
    );
};

export { LogoutPage }