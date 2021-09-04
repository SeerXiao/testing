import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKkWWFVpXmz79G6TOoKJAt3dF2ZEDsyG0',
    headers: {
        'Access-Control-Allow-Origin': '*',

    }
})


export const authApi = {
    login(data) {
        const body = JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true
        });
        debugger
        return instance.post(``, {body}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}