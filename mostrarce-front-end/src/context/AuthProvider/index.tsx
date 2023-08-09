// Esse será o contexto !! Serve para consumir informações
import {createContext, useEffect, useState} from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { LoginRequest, getUserLocalStorege, setUserLocalStorege } from './util';


//      Contexto criado - esse export serve tanto para dar valores quanto receber
export const AuthContext = createContext<IContext>({} as IContext)


//      Controlador de login e logout
export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()    


    useEffect(()=>{
        const user = getUserLocalStorege()

        if (user){
            setUser(user)
        }
    }, [])


    async function authenticate (email: string, password: string) {
        const response = await LoginRequest(email, password)


        const payload = {token: response.token, email}


        setUser(payload)
        setUserLocalStorege(payload)
    }


    function logout (){
        setUser(null)
        setUserLocalStorege(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}