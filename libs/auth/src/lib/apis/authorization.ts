import { IUser } from "../dto/user.interface";
import { IAuthorization } from "./authorization.interface";


export class Authorization implements IAuthorization{
    private static instance: IAuthorization;
    private readonly BASE_URL = 'https://mfe-testing.free.beeceptor.com';
    private abortControl: AbortController | null = null;
    private onLoginCB?: (user: IUser) => void;
    private onLogoutCB?: () => void;


    protected constructor(){}

    public static getInstance(): IAuthorization{
        if(!this.instance){
            this.instance = new Authorization();
        }
        return this.instance;
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
        this.storeInLocalStorage(response);
        if(this.onLoginCB){
            this.onLoginCB(response);
        }
        return response;
    }

    public async logout(): Promise<void> {
        localStorage.removeItem('user');
        if(this.onLogoutCB){
            this.onLogoutCB();
        }

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

    public onLogin(cb: (user: IUser) => void): void {
        this.onLoginCB = cb;
    }
    
    public onLogout(cb: () => void): void {
        this.onLogoutCB = cb;
    }

    private storeInLocalStorage(user: IUser) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    private abortLogin(){
        this.abortControl?.abort();
    }
}