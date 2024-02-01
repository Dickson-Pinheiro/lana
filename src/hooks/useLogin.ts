import { useMutation } from "react-query";
import { authService } from "../services/authService";


export function useLogin() {
    const { signinUser } = authService()
    const mutation = useMutation({
        mutationFn: signinUser,
        onSuccess: (res) => {
            const token = res.data.token
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(res.data))
        },
        onError: () => {}
    })

    return mutation
}