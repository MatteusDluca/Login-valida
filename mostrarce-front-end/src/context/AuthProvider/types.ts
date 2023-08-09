//      Criar Interfaces
//     Primeira interface - IUser

export interface IUser{
    email?: string;
    token?: string;
}

//      Interface do Context
export interface IContext extends IUser{
    authenticate:(email: string, password: string) => Promise<void>;
    logout: () => void;
}


//      Interface da Auth
export interface IAuthProvider{
    children: JSX.Element;
}