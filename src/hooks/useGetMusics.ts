import { useQuery } from "react-query";
import { musicService } from "../services/musicService";

export function useGetMusics(id: number){
    const { getMusics } = musicService()

    const query = useQuery({
        queryFn: () => getMusics(id),
        queryKey: ['musics', id]
    })

    return query
}