import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Music from "./pages/Music";
import PlayerLayout from "./layouts/PlayerLayout";
import Playlist from "./pages/Playlist";
import PrivateRoute from "./layouts/PrivateRoute";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route element={<PrivateRoute />}>
                    <Route element={<PlayerLayout />}>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/playlist/:id" element={<Playlist />} />
                        <Route path="/music" element={<Music />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}