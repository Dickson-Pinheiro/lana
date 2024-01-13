import { PlayerContextProvider } from "./context/PlayerContext"
import Player from "./components/Player"
import { GlobalStyle } from "./styles/global"
import Music from "./pages/Music"
//import { PiFlowerThin } from "react-icons/pi";
function App() {

  return (
    <>
      <GlobalStyle />
        <PlayerContextProvider>
          <Music />
        </PlayerContextProvider>
    </>
  )
}

export default App
