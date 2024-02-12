import { FormEvent, useState } from "react";
import styled from "styled-components"
import { CreateMusic } from "../../types/music";
import { useCreateMusic } from "../../hooks/useCreateMusic";

interface MusicPropsForm {
    closeModal: () => void;
    id: number;
}

export default function MusicForm({ id, closeModal }: MusicPropsForm) {
    const [title, setTitle] = useState<string>("")
    const [videoId, setVideoId] = useState<string>("")
    const [artist, setArtist] = useState<string>("")
    const { mutate } = useCreateMusic()

    function submitForm(e: FormEvent){
        e.preventDefault()
        const data: CreateMusic = {
            artist,
            title,
            videoId,
            playlistId: id
        }
        mutate(data)
        setArtist('')
        setTitle('')
        setVideoId('')
        closeModal()
    }

    return (
        <ContainerMusicForm onSubmit={submitForm}>
            <ContainerInput>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </ContainerInput>
            <ContainerInput>
                <label>video id</label>
                <input type="text" value={videoId} onChange={(e) => setVideoId(e.target.value)} required />
            </ContainerInput>
            <ContainerInput>
                <label>artist</label>
                <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
            </ContainerInput>
            <Button type="submit">Send</Button>
        </ContainerMusicForm>
    )
}

const ContainerMusicForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.gap['gap-4']};
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: ${props => props.theme.gap['gap-4']};
    label {
        font-family: 'Maven pro', sans-serif;
        font-weight: 500;
        color: ${props => props.theme.colors['white']};
        font-size: 16px;
    }
    input {
        width: 100%;
        max-width: 366px;
        height: 60px;
        border-radius: 12px;
        border: 1px solid #FFF;
        background-color: transparent;
        padding-left: 8px;
        box-sizing: border-box;
        padding-right: 8px;
        color: ${props => props.theme.colors['white']};
        &::placeholder {
            color: ${props => props.theme.colors['gray1']};
        }
    }
`

const Button = styled.button`
    color: #FFF;
    font-family: 'Livvic', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 12px;
    background-color: #000;
    border: none;
    width: 237px;
    height: 54px;
    cursor: pointer;
    transition: 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${props => props.theme.colors['yellow1']};
    }
    &:disabled {
        &:hover {
        background-color: ${props => props.theme.colors['black']};
    }
    }
`