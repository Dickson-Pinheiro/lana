export interface IUserSignup {
    name: string;
    email: string;
    password: string;
}

export interface ISignInUser {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: number;
    name: string;
    token: string;
}