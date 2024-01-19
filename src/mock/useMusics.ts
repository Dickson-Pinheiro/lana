import { useMemo } from "react";
import { Music } from "../types/music";

export function useMusics() {
    const musics: Music[] = useMemo(() => {
        return [
            {
                id: 1,
                name: 'Anjo / Não Precisa Mudar / Outra Vez',
                artist: 'Saulo',
                videoId: 'uQZGJBhO1WU'
            },
            {
                id: 2,
                name: 'Let Her Go',
                artist: 'Passenger',
                videoId: 'gMp4-URITe8'
            },
            {
                id: 3,
                name: 'All Of Me',
                artist: 'John Legend',
                videoId: 'Spe6113csjU'
            },
            {
                id: 4,
                name: 'Amuleto',
                artist: 'Gabriel Elias',
                videoId: 'UF45kOh03NU'
            }
        ]

    }, [])

    return musics
}