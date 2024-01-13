import { useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components';
import { PlayerContext } from "../context/PlayerContext"
import YouTube from "react-youtube"
import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbVolume2 } from "react-icons/tb";
import '../styles/player.css'

export default function Player() {
    const ytRef = useRef<YouTube | null>(null)
    const [paused, setPaused] = useState<boolean>(true)
    const { setListVideos, next, prev, listVideos, activeVideo } = useContext(PlayerContext)
    const [volume, setVolume] = useState<number>(100)
    useEffect(() => {
        setListVideos(['dzNvk80XY9s'])
        
    }, [activeVideo])

    useEffect(() => {
        if(ytRef.current){
            ytRef.current?.getInternalPlayer()?.setVolume(volume)
        }
    }, [volume])


    async function playVideo(){
        ytRef.current?.getInternalPlayer()?.playVideo();
        ytRef.current?.getInternalPlayer()?.unMute();
    }

    function pauseVideo(){
        ytRef.current?.getInternalPlayer()?.pauseVideo();
    }
    return (
        <ContainerPlayer>
            <ContainerVideo>
            {
                listVideos.length && <YouTube
                    videoId={listVideos[activeVideo]}
                    iframeClassName="iframe"
                    ref={ytRef}
                    onPause={() => setPaused(true)}
                    onPlay={() => setPaused(false)}
                    onReady={(e) => setPaused(true)}  
                />
            }
            </ContainerVideo>
            <ContainerControls>
                <TbPlayerTrackPrevFilled onClick={prev} color="#ffffff" />
                <div>
                    {paused ? <TbPlayerPlayFilled onClick={playVideo} color="#ffffff"/> : <TbPlayerPauseFilled onClick={pauseVideo} color="#ffffff"/>}
                </div>
                <TbPlayerTrackNextFilled onClick={next} color="#ffffff" />
            </ContainerControls>
            <ContainerVolume>
                <TbVolume2 color="F5B301" size={24}/>
                <input type="range" min={0} max={100} step={1} value={volume} onChange={(e) => setVolume(Number(e.target.value))}/>
            </ContainerVolume>
        </ContainerPlayer>
    )
}

const ContainerControls = styled.div`
    display: flex;
    gap: 20px;
    box-sizing: border-box;
    svg {
        font-size: 34px;
    }
`

const ContainerVolume = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    input[type=range] {
        visibility: hidden;
        transition: 400ms;
    }

    svg {
        cursor: pointer;
    }

    &:hover {
        input[type=range]{
            visibility: visible;
        }
    }
    @media (max-width: 600px){
        input[type=range] {
            display: none;
        }
        svg {
            display: none;
        }
    }    
`

const ContainerPlayer = styled.div`
    position: fixed;
    padding: 12px;
    width: 100%;
    background-color: black;
    bottom: 0;
    left: 0;
    height: 90px;
    display: flex;
    gap: 40px;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
`

const ContainerVideo = styled.div`
    @media (max-width: 600px){
        width: 0;
        height: 0;
        overflow: hidden;

    }
`