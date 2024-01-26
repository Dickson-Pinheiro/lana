import { useContext } from "react"
import { EPlayerActionsType, EVideoStatus, PlayerContext } from "../../context/PlayerContext"
import { PiPauseCircleFill, PiPlayCircleFill } from "react-icons/pi"
import styled, { useTheme } from "styled-components"
import { Oval } from 'react-loader-spinner'

interface PlayerIconProps {
    videoId: string;
}

export default function PlayerIcon({videoId}: PlayerIconProps){
    const { activeVideoData, defineActionPlayer, setActiveVideoData } = useContext(PlayerContext)
    const theme = useTheme()

    function playVideo(){
        defineActionPlayer(EPlayerActionsType.PLAY)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PLAYED
            }
        })
    }

    function pauseVieo(){
        defineActionPlayer(EPlayerActionsType.PAUSE)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PAUSED
            }
        })
    }

    return(
        <>
        {(!activeVideoData || activeVideoData.videoId !== videoId || (activeVideoData.status === "PAUSED" && activeVideoData.videoId === videoId) ) && <PiPlayCircleFill color={theme.colors['yellow1']} size={36} onClick={playVideo}/>}
        {(activeVideoData?.status === "PLAYED" && activeVideoData?.videoId === videoId) && <PiPauseCircleFill color={theme.colors['yellow1']} size={36} onClick={pauseVieo}/>}
        {(activeVideoData?.status === "LOADING" && activeVideoData?.videoId === videoId) && <ContainerOval><Oval color={theme.colors['yellow1']} strokeWidth={3} width={24} height={24} secondaryColor={theme.colors['gray1']}/></ContainerOval>}
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