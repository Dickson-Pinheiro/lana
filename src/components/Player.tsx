import { useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components';
import { EPlayerActionsType, EVideoStatus, PlayerContext } from "../context/PlayerContext"
import YouTube, { YouTubeEvent } from "react-youtube"
import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbVolume2 } from "react-icons/tb";
import '../styles/player.css'

export default function Player() {
    const ytRef = useRef<YouTube | null>(null)
    const { next, prev, listVideos, activeVideo, setActiveVideoData, activeVideoData, action, defineActionPlayer } = useContext(PlayerContext)
    const [volume, setVolume] = useState<number>(100)
    const [autoplay, setAutoPlay] = useState<0 | 1 | undefined>(0)

    useEffect(() => {
        if (ytRef.current) {
            ytRef.current?.getInternalPlayer()?.setVolume(volume)
        }
    }, [volume])

    useEffect(() => {
        if (ytRef.current && action === EPlayerActionsType.PLAY) {
            playVideo()
        }
        if (ytRef.current && action === EPlayerActionsType.PAUSE) {
            pauseVideo()
        }
    }, [action, ytRef.current, activeVideoData?.status, activeVideoData])

    function playVideo() {
        ytRef.current?.getInternalPlayer()?.playVideo();
        ytRef.current?.getInternalPlayer()?.unMute();
    }

    function pauseVideo() {
        ytRef.current?.getInternalPlayer()?.pauseVideo();
    }

    async function onReady(e: YouTubeEvent<any>) {
        if (autoplay === 0) {
            setActiveVideoData({
                videoId: listVideos[activeVideo].videoId,
                status: EVideoStatus.PAUSED
            })
        } else {
            setActiveVideoData({
                videoId: listVideos[activeVideo].videoId,
                status: EVideoStatus.PLAYED
            })
        }
        setAutoPlay(1)
        e.target.unMute()
    }

    function onClickPlay() {
        defineActionPlayer(EPlayerActionsType.PLAY)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PLAYED
            }
        })
    }

    function onClickPause() {
        defineActionPlayer(EPlayerActionsType.PAUSE)
        setActiveVideoData(v => {
            return {
                videoId: v?.videoId as string,
                status: EVideoStatus.PAUSED
            }
        })
    }

    function onEnd() {
        next()
        defineActionPlayer(EPlayerActionsType.PLAY)
        setActiveVideoData({
            videoId: listVideos[activeVideo].videoId,
            status: EVideoStatus.PLAYED
        })
    }

    return (
        <>
            {activeVideoData && 
            <ContainerPlayer>
                <ContainerVideo>
                    {
                        listVideos.length && <YouTube
                            videoId={listVideos[activeVideo].videoId}
                            iframeClassName="iframe"
                            ref={ytRef}
                            onPause={() => setActiveVideoData(v => {
                                return {
                                    videoId: v?.videoId as string,
                                    status: EVideoStatus.PAUSED
                                }
                            })}
                            onPlay={() => () => setActiveVideoData(v => {
                                return {
                                    videoId: v?.videoId as string,
                                    status: EVideoStatus.PLAYED
                                }
                            })}
                            onReady={onReady}
                            onEnd={onEnd}
                            opts={{
                                playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: autoplay
                                },
                            }}
                        />
                    }
                </ContainerVideo>
                <ContainerControls>
                    <TbPlayerTrackPrevFilled onClick={prev} color="#ffffff" />
                    <div>
                        {!activeVideoData || activeVideoData?.status === EVideoStatus.PAUSED ? <TbPlayerPlayFilled onClick={onClickPlay} color="#ffffff" /> : <TbPlayerPauseFilled onClick={onClickPause} color="#ffffff" />}
                    </div>
                    <TbPlayerTrackNextFilled onClick={next} color="#ffffff" />
                </ContainerControls>
                <ContainerVolume>
                    <TbVolume2 color="F5B301" size={24} />
                    <input type="range" min={0} max={100} step={1} value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
                </ContainerVolume>
            </ContainerPlayer>
            }
        </>
    )
}

const ContainerControls = styled.div`
    display: flex;
    gap: ${props => props.theme.gap['gap-4']};
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
    padding: ${props => props.theme.padding['p-3']};
    width: 100%;
    background-color: ${props => props.theme.colors['black']};
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