import styled from "styled-components"
import logoImage from '../assets/flower.svg'

export default function Logo(){
    return(
        <ContainerLogo>
            <img src={logoImage} />
            <h1>Lana</h1>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.gap['gap-1']};
    img {
        width: 111px;
    }
    h1 {
        font-family: 'Livvic', sans-serif;
        font-weight: 300;
        color: ${props => props.theme.colors['white']};
        font-size: 45px;
    }
`