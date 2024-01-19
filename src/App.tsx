import { PlayerContextProvider } from "./context/PlayerContext"
import Player from "./components/Player"
import { GlobalStyle } from "./styles/global"
import Music from "./pages/Music"
import Router from "./router"
import { ThemeProvider } from 'styled-components';
import { customTheme } from "./theme/customTheme"
//import { PiFlowerThin } from "react-icons/pi";
function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
        <PlayerContextProvider>
          <Router />
        </PlayerContextProvider>
    </ThemeProvider>
  )
}

export default App
