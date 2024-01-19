import styled from "styled-components"
import Logo from "../components/Logo"
import FormLogin from "../components/login/FormLogin"

export default function Login(){
    return(
        <ContainerLogin>
            <Logo />
            <FormLogin />
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${props => props.theme.gap['gap-6']};
    background-color: ${props => props.theme.colors['gray2']};
    color: white;
`