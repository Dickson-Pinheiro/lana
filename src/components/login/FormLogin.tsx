import { FormEvent, useContext, useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"
import { authContext } from "../../context/authContext"
import { useNavigate } from "react-router-dom"
import { Oval } from "react-loader-spinner"

export default function FormLogin() {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { signIn, signed, isLoading, isLoginError } = useContext(authContext)
    const navigate = useNavigate()

    const theme = useTheme()

    function submitLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            email: login,
            password
        }
        signIn?.(data)
    }

    useEffect(() => {
        if (signed) {
            navigate('/home')
        }
        if(isLoginError){
            setPassword('')
            setLogin('')
        }
    }, [signed, isLoading])



    return (
        <ContainerFormLogin onSubmit={submitLogin}>
            <ContainerInput>
                <label htmlFor="login">login</label>
                <input type="text" placeholder="login" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            </ContainerInput>
            <ContainerInput>
                <label htmlFor="password">password</label>
                <input type="password" placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </ContainerInput>
            <Button type="submit" disabled={isLoading}>{isLoading ? <Oval color={theme.colors['yellow1']} strokeWidth={3} width={24} height={24} secondaryColor={theme.colors['gray1']} /> : "continuar"}</Button>
        </ContainerFormLogin>
    )
}

const ContainerFormLogin = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    gap: ${props => props.theme.gap['gap-4']};
    flex-direction: column;
    justify-content: center;
    align-items: center;
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