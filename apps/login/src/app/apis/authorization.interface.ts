import { IUser } from "../../../../shell/src/app/dto/user.interface";

export interface IAuthorization{
    login(email: string, password: string): Promise<IUser>;
    logout(): Promise<void>;

    isAuthorized(): Promise<boolean>;
    getUser(): Promise<IUser | null>

}