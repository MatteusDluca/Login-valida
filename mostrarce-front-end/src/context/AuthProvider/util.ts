import { Api } from "../../Services/api";
import { IUser } from "./types";

//      Leitura e escrita no BD(Browser)
export function setUserLocalStorege (user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorege(){
    const json = localStorage.getItem('u')

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null
}

//      Autenticar

export async function LoginRequest(email: string, password: string){
    try {
        const request = await Api.post('login', {email, password})

        return request.data
    } catch (error) {
        return null
    }
}