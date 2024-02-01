import styled from "styled-components"
import Header from "../components/Header"
import plusImg from '../assets/plus.svg'
import { useState } from "react"
import Modal from "../components/Modal"
import PlaylistForm from "../components/playlist/PlaylistForm"

export default function Home() {
    const [open, setOpen] = useState<boolean>(false)

    function openModal(){
        setOpen(true)
    }

    function closeModel(){
        setOpen(false)
    }

    return (
        <ContainerHome>
            <Header />
            <ContainerContent>
                <ContainerTitle>
                    <h1>Playlists</h1>
                    <img src={plusImg} onClick={openModal}/>
                </ContainerTitle>
                <ContainerPlaylists>
                    <PlaylistItem><p>est test test test test test test tes test test</p></PlaylistItem>
                    <PlaylistItem></PlaylistItem>
                    <PlaylistItem></PlaylistItem>
                    <PlaylistItem></PlaylistItem>
                </ContainerPlaylists>
            </ContainerContent>
            <Modal open={open} closeModal={closeModel}><PlaylistForm /></Modal>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
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

const ContainerPlaylists = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-top: 20px;
    gap: ${props => props.theme.gap['gap-4']};
`

const PlaylistItem = styled.div`
    max-width: 240px;
    width: 100%;
    height: 66px;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    background-color: ${props => props.theme.colors['gray3']};
    &:hover {
        background-color: ${props => props.theme.colors['black']};
    }
`