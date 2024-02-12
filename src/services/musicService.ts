import { api } from "./api"
import { CreateMusic } from '../types/music'

export function musicService(){
    const service = {
        async getMusics(id: number){
            return await api.get(`/musics?playlist=${id}`)
        },

        async createMusic(data: CreateMusic){
            return await api.post('/musics', data)
        }
    }
    return service
}