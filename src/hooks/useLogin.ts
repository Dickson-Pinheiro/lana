import { useMutation } from "react-query";
import { authService } from "../services/authService";


export function useLogin() {
    const { signinUser } = authService()
    const mutation = useMutation({
        mutationFn: signinUser,
        onSuccess: (res) => {
            console.log(res)
            const token = res.data.token
            console.log(token)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(res.data))
        },
        onError: () => {}
    })

    return mutation
}