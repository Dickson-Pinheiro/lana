import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Music } from "../types/music";

export enum EVideoStatus {
    PAUSED = "PAUSED",
    PLAYED = "PLAYED",
    LOADING = "LOADING"
}

interface ActiveVideoData {
    videoId: string;
    status: EVideoStatus;
    id: number;
}

export enum EPlayerActionsType {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
}

interface PlayerContextProps {
    listVideos: Music[]
    setListVideos: Dispatch<SetStateAction<Music[]>>,
    next: () => void,
    prev: () => void,
    activeVideo: number,
    playPerId: (videoId: string) => void,
    activeVideoData: ActiveVideoData | undefined,
    setActiveVideoData: Dispatch<SetStateAction<ActiveVideoData | undefined>>,
    action: EPlayerActionsType | undefined,
    defineActionPlayer: (act: EPlayerActionsType) => void
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
    playPerId: () => {},
    activeVideoData: undefined,
    setActiveVideoData: () => {},
    action: undefined,
    defineActionPlayer: () => {}
})

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [listVideos, setListVideos] = useState<Music[]>([])
    const [activeVideo, setActiveVideo] = useState<number>(0)
    const [activeVideoData, setActiveVideoData] = useState<ActiveVideoData>()
    const [action, setAction] = useState<EPlayerActionsType>()

    const next = () => {
        if (listVideos[activeVideo + 1]) {
            setActiveVideo(a => a + 1)
            let videoId = listVideos[activeVideo + 1].videoId
            let id = listVideos[activeVideo + 1].id
            setActiveVideoData({videoId: videoId, status: EVideoStatus.LOADING, id: id})
        }
    }

    function defineActionPlayer(act: EPlayerActionsType){
        setAction(act)
    }

    const prev = () => {
        if (activeVideo > 0) {
            setActiveVideo(a => a - 1)
            let videoId = listVideos[activeVideo - 1].videoId
            let id = listVideos[activeVideo - 1].id
            setActiveVideoData({id: id, videoId: videoId, status: EVideoStatus.LOADING})
        }
    }

    function playPerId(videoId: string){
        const position = listVideos.findIndex(e => e.videoId === videoId)
        console.log(position)
        const video = listVideos.find(e => e.videoId === videoId)
        setActiveVideo(position);
        if(videoId !== activeVideoData?.videoId){
            setActiveVideoData({id: video?.id as number,videoId, status: EVideoStatus.LOADING})
        }
    }

    return (
        <PlayerContext.Provider value={{
            listVideos,
            setListVideos,
            next,
            prev,
            activeVideo,
            playPerId,
            activeVideoData,
            setActiveVideoData,
            action,
            defineActionPlayer
        }}>
            {children}
        </PlayerContext.Provider>
    )
}