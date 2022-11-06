import { IUser } from "../dto/user.interface";

export interface IAuthorization{
    login(email: string, password: string): Promise<IUser>;
    logout(): Promise<void>;

    onLogin(cb: (user: IUser) => void): void;
    onLogout(cb: () => void): void;

    isAuthorized(): Promise<boolean>;
    getUser(): Promise<IUser | null>

}