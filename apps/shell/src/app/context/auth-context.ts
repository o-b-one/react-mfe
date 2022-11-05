import { createContext } from "react";
import { IUser } from "../dto/user.interface";

export interface IAuthState{
    isLoggedIn: boolean;
    user: IUser | null;
}

export const AuthContext = createContext({
    isLoggedIn: false,
    user: null as IUser | null
} as IAuthState)