import { useContext, useEffect } from "react"
import { PlayerContext } from "../context/PlayerContext"
import YouTube from "react-youtube"

export default function Player() {
    const { setListVideos, next, prev, listVideos, activeVideo } = useContext(PlayerContext)
    useEffect(() => {
        setListVideos(['aDe8ZRBYLuc', 'OF8Lf8PdpKI',])
    }, [activeVideo])

    return (
        <div>
            <h1>playlist</h1>
            {
            listVideos.length &&  <YouTube 
                videoId={listVideos[activeVideo]}
            />
            }
            <div>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )
}