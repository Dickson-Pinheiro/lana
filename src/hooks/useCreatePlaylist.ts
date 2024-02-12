import { useMutation, useQueryClient } from "react-query";
import { playlistService } from "../services/playlistService";


export function useCreatePlaylist() {
    const { createPlaylist } = playlistService()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: createPlaylist,
        onSuccess: () => {
            queryClient.invalidateQueries('playlists')
        }
    })
    return mutation
}