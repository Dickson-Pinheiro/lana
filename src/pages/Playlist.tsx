import styled from "styled-components"
import Header from "../components/Header"
import plusImg from '../assets/plus.svg'
import MusicItem from "../components/music/MusicItem"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetMusics } from '../hooks/useGetMusics'
import Modal from "../components/Modal"
import MusicForm from "../components/music/MusicForm"
import { Music } from "../types/music"

export default function Playlist(){
    const {id} = useParams()
    const [open, setOpen] = useState<boolean>(false)
    const { data } = useGetMusics(Number(id))

    function closeModal(){
        setOpen(false)
    }

    function openModal(){
        setOpen(true)
    }

    return(
        <ContainerPlaylist>
            <Header />
            <ContainerContent>
                <ContainerTitle>
                    <h1>Músicas</h1>
                    <img src={plusImg} onClick={openModal}/>
                </ContainerTitle>
                <ContainerMusics>
                    {data?.data.map((m: any) => <MusicItem name={m.title} artist={m.artist} key={m.id} videoId={m.videoId} id={m.id} musics={data?.data as Music[]}/>)}
                </ContainerMusics>
            </ContainerContent>
            <Modal open={open} closeModal={closeModal}><MusicForm closeModal={closeModal} id={Number(id)}></MusicForm> </Modal>
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