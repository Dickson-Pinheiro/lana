import { PlayerContextProvider } from "./context/PlayerContext"
import Player from "./components/Player"
//import { PiFlowerThin } from "react-icons/pi";
function App() {

  return (
    <PlayerContextProvider>
      <Player/>
    </PlayerContextProvider>
  )
}

export default App
