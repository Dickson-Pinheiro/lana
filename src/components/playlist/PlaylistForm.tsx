import { FormEvent, useState } from "react"
import styled from "styled-components"

export default function PlaylistForm() {
    const [name, setName] = useState<string>('')

    function submitForm(e: FormEvent){
        console.log("aqui")
        e.preventDefault()
        const data = {
            name
        }
    }

    return (
        <ContainerPlaylistForm onSubmit={submitForm}>
            <ContainerInput>
                <label htmlFor="name">name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required={true}/>
            </ContainerInput>
            <Button type="submit">Send</Button>
        </ContainerPlaylistForm>
    )
}

const ContainerPlaylistForm = styled.form`
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