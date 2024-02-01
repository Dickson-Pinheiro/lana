import { api } from "./api";
import { ISignInUser, IUserSignup } from '../types/auth'

export function authService() {
    const services = {
            async signupUser(data: IUserSignup) {
                return await api.post('/users', data)
            },

            async signinUser(data: ISignInUser) {
                console.log("chamou signin")
                return await api.post('/users/login', data)
            }
        }

    return services
}