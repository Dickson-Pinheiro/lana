import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Music } from "../types/music";

interface PlayerContextProps {
    listVideos: Music[]
    setListVideos: Dispatch<SetStateAction<Music[]>>,
    next: () => void,
    prev: () => void,
    activeVideo: number,
    playPerId: (videoId: string) => void
}

interface PlayerContextProviderProps {
    children: ReactNode
}

export const PlayerContext = createContext<PlayerContextProps>({
    listVideos: [],
    setListVideos: () => { },
    next: () => { },
    prev: () => { },
    activeVideo: 0,
    playPerId: () => {}
})

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [listVideos, setListVideos] = useState<Music[]>([])
    const [activeVideo, setActiveVideo] = useState<number>(0)

    const next = () => {
        console.log('next')
        if (listVideos[activeVideo + 1]) {
            setActiveVideo(a => a + 1)
        }
    }

    const prev = () => {
        console.log('prev')
        if (activeVideo > 0) {
            setActiveVideo(a => a - 1)
        }
    }

    function playPerId(videoId: string){
        const position = listVideos.findIndex(e => e.videoId === videoId)
        setActiveVideo(position);
    }

    return (
        <PlayerContext.Provider value={{
            listVideos,
            setListVideos,
            next,
            prev,
            activeVideo,
            playPerId
        }}>
            {children}
        </PlayerContext.Provider>
    )
}