import { useQuery } from "react-query";
import { playlistService } from "../services/playlistService"; 
import { AxiosError } from "axios";

export function useGetPlaylists(){
    const { getPlaylists } = playlistService()
    const query = useQuery({
        queryKey: ['playlists'],
        queryFn: getPlaylists,
        retry: false
    })
   if(query.error){
    const axiosError = query.error as AxiosError
    if(axiosError?.response?.status === 401){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
   }
    return query
}