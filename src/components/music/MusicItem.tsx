import styled from "styled-components"
import { useContext } from "react";
import { EPlayerActionsType, PlayerContext } from "../../context/PlayerContext";
import PlayerIcon from "./PlayerIcon";
import { Music } from "../../types/music";

interface MusicItemProps {
    name: string,
    artist: string,
    videoId: string,
    id: number,
    musics: Music[]
}

export default function MusicItem({ name, artist, videoId, id, musics}: MusicItemProps){
    const { playPerId, activeVideo, listVideos, defineActionPlayer, activeVideoData, setListVideos } = useContext(PlayerContext)

    function onClickMusicItem(){
        setListVideos(musics)
        playPerId(videoId)
        if(activeVideoData?.videoId === videoId){
            return
        }
        
        defineActionPlayer(EPlayerActionsType.PLAY)
    }

    return(
        <ContainerMusicItem active={listVideos?.[activeVideo]?.id === id } onClick={() => onClickMusicItem()}>
            <PlayerIcon id={id} musics={musics}/>
            <InfoContainer>
                <p>{name}</p>
                <span>{artist}</span>
            </InfoContainer>
        </ContainerMusicItem>
    )
}

interface ContainerMusicProps {
    active: boolean
}

const ContainerMusicItem = styled.div<ContainerMusicProps>`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.gap['gap-3']};
    width: 100%;
    padding: 8px;
    background-color: ${props => props.theme.colors['gray3']};
    border-radius: 8px;
    border: 1px solid ${props => props.active ? props.theme.colors['yellow1'] : "transparent"};
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