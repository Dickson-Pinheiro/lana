import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface PlayerContextProps {
    listVideos: string[]
    setListVideos: Dispatch<SetStateAction<string[]>>,
    next: () => void,
    prev: () => void,
    activeVideo: number,
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
})

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [listVideos, setListVideos] = useState<string[]>([])
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


    return (
        <PlayerContext.Provider value={{
            listVideos,
            setListVideos,
            next,
            prev,
            activeVideo,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}