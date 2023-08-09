import  Axios  from 'axios';
//      API De requisição de login


export const Api = Axios.create({
    baseURL: "https://reqres.in/api/",
});
