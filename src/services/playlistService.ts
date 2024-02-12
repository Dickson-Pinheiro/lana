import { api } from "./api";
import { ICreatePlaylist } from '../types/playlist'

export function playlistService() {
    const service = {
        async createPlaylist(data: ICreatePlaylist) {
            return await api.post('/playlists', data)
        },

        async getPlaylists() {
            return await api.get('/playlists')
        }
    }
    return service;
}