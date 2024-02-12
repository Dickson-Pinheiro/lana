import { useMutation, useQueryClient } from "react-query";
import { musicService } from "../services/musicService";


export function useCreateMusic() {
    const { createMusic } = musicService()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: createMusic,
        onSuccess: () => {
            queryClient.invalidateQueries('musics')
        }
    })
    return mutation
}