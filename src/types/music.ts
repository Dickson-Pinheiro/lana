export interface Music {
    id: number;
    name: string;
    artist: string;
    videoId: string;
}

export interface CreateMusic {
    title: string;
    videoId: string;
    artist: string;
    playlistId: number
}