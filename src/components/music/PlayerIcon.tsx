import { useContext } from "react"
import { EPlayerActionsType, EVideoStatus, PlayerContext } from "../../context/PlayerContext"
import { PiPauseCircleFill, PiPlayCircleFill } from "react-icons/pi"
import styled, { useTheme } from "styled-components"
import { Oval } from 'react-loader-spinner'
import { Music } from "../../types/music"

interface PlayerIconProps {
    id: number;
    musics: Music[];
}

export default function PlayerIcon({id, musics}: PlayerIconProps){
    const { activeVideoData, defineActionPlayer, setActiveVideoData, setListVideos } = useContext(PlayerContext)
    const theme = useTheme()

    function playVideo(){
        setListVideos(musics)
        defineActionPlayer(EPlayerActionsType.PLAY)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PLAYED,
                id: v?.id as number
            }
        })
    }

    function pauseVieo(){
        defineActionPlayer(EPlayerActionsType.PAUSE)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PAUSED,
                id: v?.id as number
            }
        })
    }

    return(
        <>
        {(!activeVideoData || activeVideoData.id !== id || (activeVideoData.status === "PAUSED" && activeVideoData.id === id) ) && <PiPlayCircleFill color={theme.colors['yellow1']} size={36} onClick={playVideo}/>}
        {(activeVideoData?.status === "PLAYED" && activeVideoData?.id === id) && <PiPauseCircleFill color={theme.colors['yellow1']} size={36} onClick={pauseVieo}/>}
        {(activeVideoData?.status === "LOADING" && activeVideoData?.id === id) && <ContainerOval><Oval color={theme.colors['yellow1']} strokeWidth={3} width={24} height={24} secondaryColor={theme.colors['gray1']}/></ContainerOval>}
        </>
    )
}

const ContainerOval = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`