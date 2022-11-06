import { createContext } from "react";
import { IUser } from "../dto/user.interface";

interface IAuthContext{
    isLoggedIn: boolean;
    user: IUser | null;
    login: (email: string, password: string) => Promise<IUser>;
    logout: () => Promise<void>;
}

const AuthContext = createContext({
    
} as IAuthContext)

export default AuthContext;