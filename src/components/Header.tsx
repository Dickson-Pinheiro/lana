import styled from "styled-components"
import Logo from "./Logo"

export default function Header(){
    return(
        <HeaderContainer>
            <Logo />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 140px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`