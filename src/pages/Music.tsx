import styled from "styled-components"
import Player from "../components/Player"
import saturnFolder from '../assets/saturn.jpeg';
import { TbSquareRoundedChevronLeft } from "react-icons/tb";

export default function Music(){
    return(
        <ContainerMusic>
            <ContainerBackButton>
                <TbSquareRoundedChevronLeft color="#c7c7c7" />
            </ContainerBackButton>
            <ContainerMusicData>
                <img src={saturnFolder} />
                <ContainerDescription>
                    <h1>Saturn</h1>
                    <p>Sleeping At Last</p>
                </ContainerDescription>
            </ContainerMusicData>
            <Player />
        </ContainerMusic>
    )
}

const ContainerBackButton = styled.div`
    box-sizing: border-box;
    margin-bottom: 20px;
    svg {
        font-size: 24px;
        cursor: pointer;
    }
`
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
     h1 {
        font-size: 28px;
        color: #ffffff;
        font-weight: bold;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 900;
        text-align: center;
    }

    p {
        font-size: 18px;
        color: #c7c7c7;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 400;
        text-align: center;
    }
`

const ContainerMusic = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background-color: #1E2328;
`

const ContainerMusicData = styled.div`
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 90%;
        max-width: 420px;
        border-radius: 12px;
    }
`