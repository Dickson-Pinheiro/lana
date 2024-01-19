import { Outlet } from "react-router-dom";
import Player from "../components/Player";

export default function PlayerLayout(){
    return (
        <div>
            <Outlet />
            <Player />
        </div>
    )
}