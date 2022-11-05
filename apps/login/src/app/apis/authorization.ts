import { IUser } from "../../../../shell/src/app/dto/user.interface";
import { IAuthorization } from "./authorization.interface";


export class Authorization implements IAuthorization{
    private static instance: IAuthorization;
    private readonly BASE_URL = 'https://mfe-testing.free.beeceptor.com';
    private abortControl: AbortController | null = null;
    private loginCB: (user: IUser) => void = (user) => {};

    public static getInstance(): IAuthorization{
        if(!this.instance){
            this.instance = new Authorization();
        }
        return this.instance;
    }

    public onLogin(cb: (user: IUser) => void){
        this.loginCB = cb;
    }


    public async login(email: string, password: string): Promise<IUser> {
        this.abortLogin();
        this.abortControl = new AbortController();
   
        const response = await fetch(`${this.BASE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            signal: this.abortControl.signal,
        })
        .then(res => res.json())
        .then( _ => {
            return {
                email,
                name: email.split('@')[0].replace('.', ' '),
                avatar: 'https://avatars.githubusercontent.com/u/41166148?v=4'
            }
        });
        this.storeToLocalStorage(response);
        this?.loginCB(response);
        return response;
    }

    public async logout(): Promise<void> {
        localStorage.removeItem('user');
    }


    public async isAuthorized(): Promise<boolean> {
        return !!localStorage.getItem('user');
    }
    public async getUser(): Promise<IUser | null> {
        if(await this.isAuthorized()){
            return JSON.parse(localStorage.getItem('user') as string);
        }else{
            return null;
        }
    }


    private storeToLocalStorage(user: IUser) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    private abortLogin(){
        this.abortControl?.abort();
    }
}