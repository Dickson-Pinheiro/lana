import { PlayerContextProvider } from "./context/PlayerContext"
import { GlobalStyle } from "./styles/global"
import Router from "./router"
import { ThemeProvider } from 'styled-components';
import { customTheme } from "./theme/customTheme"
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/authContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const queryClient = new QueryClient({defaultOptions: {
    mutations: {
       retry: false,
    },
  }})
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GlobalStyle />
          <PlayerContextProvider>
            <Router />
            <ToastContainer />
          </PlayerContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
