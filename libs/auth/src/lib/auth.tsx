import { useEffect, useState } from "react";
import { IUser } from "../types";
import { Authorization } from "./apis/authorization";
import AuthContext  from "./context/auth-context";

export function AuthProvider(props: any){
    const auth = Authorization.getInstance();
    const [user, setUser] = useState(null as IUser | null);

    auth.onLogin(setUser);
    auth.onLogout(() => setUser(null));

    useEffect(() => {auth.getUser().then(setUser)}, []);

    return (
        <AuthContext.Provider value={ {isLoggedIn: !!user, user: user, login: auth.login.bind(auth), logout: auth.logout.bind(auth)}}>
            { props.children }        
        </AuthContext.Provider>
    )
}