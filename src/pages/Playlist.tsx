import styled from "styled-components"
import Header from "../components/Header"
import plusImg from '../assets/plus.svg'
import MusicItem from "../components/music/MusicItem"
import { useMusics } from "../mock/useMusics"
import { useContext, useEffect } from "react"
import { PlayerContext } from "../context/PlayerContext"

export default function Playlist(){
    const musics = useMusics()
    const { setListVideos, activeVideo  } = useContext(PlayerContext)
    useEffect(() => {
        setListVideos(musics)
    }, [activeVideo])

    return(
        <ContainerPlaylist>
            <Header />
            <ContainerContent>
                <ContainerTitle>
                    <h1>Músicas</h1>
                    <img src={plusImg} />
                </ContainerTitle>
                <ContainerMusics>
                    {musics.map(m => <MusicItem name={m.name} artist={m.artist} key={m.id} videoId={m.videoId}/>)}
                </ContainerMusics>
            </ContainerContent>
        </ContainerPlaylist>
    )
}

const ContainerPlaylist = styled.div`
    background-color: ${props => props.theme.colors['gray2']};
    width: 100%;
    height: 100vh;
`

const ContainerContent = styled.main`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 12px;
    box-sizing: border-box;
`
const ContainerTitle = styled.div`
    display: flex;
    align-items: center;

    gap: ${props => props.theme.gap['gap-2']};
    h1 {
        font-family: 'Maven pro', sans-serif;
        color: ${props => props.theme.colors['gray1']};
        font-size: 28px;
        font-weight: 800;
    }
    img, svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`

const ContainerMusics = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 20px;
    gap: ${props => props.theme.gap['gap-4']};
`