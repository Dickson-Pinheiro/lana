import styled from "styled-components"
import { PiPlayCircleFill, PiPauseCircleFill } from "react-icons/pi";
import { useTheme } from 'styled-components'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

interface MusicItemProps {
    name: string,
    artist: string,
    videoId: string
}

export default function MusicItem({ name, artist, videoId }: MusicItemProps){
    const theme = useTheme()
    const { playPerId, activeVideo, listVideos } = useContext(PlayerContext)

    return(
        <ContainerMusicIem>
            { listVideos[activeVideo]?.videoId === videoId ? <PiPauseCircleFill color={theme.colors['yellow1']} size={36}/> : <PiPlayCircleFill color={theme.colors['yellow1']} size={36} onClick={()=> playPerId(videoId)}/>} 
            <InfoContainer>
                <p>{name}</p>
                <span>{artist}</span>
            </InfoContainer>
        </ContainerMusicIem>
    )
}

const ContainerMusicIem = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.gap['gap-3']};
    width: 100%;
    padding: 8px;
    background-color: ${props => props.theme.colors['gray3']};
    border-radius: 8px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transition: 200ms;
    box-sizing: border-box;
    &:hover {
        border-bottom: 1px solid ${props => props.theme.colors['yellow1']};
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap['gap-1']};
    span {
        color: ${props => props.theme.colors['gray1']};
        font-family: 'Maven pro', sans-serif;
        font-weight: 200;
    }
    p {
        color: ${props => props.theme.colors['white']};
        font-family: 'Maven pro', sans-serif;
        font-weight: 600;
    }
`