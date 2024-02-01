import { PlayerContextProvider } from "./context/PlayerContext"
import { GlobalStyle } from "./styles/global"
import Router from "./router"
import { ThemeProvider } from 'styled-components';
import { customTheme } from "./theme/customTheme"
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/authContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";

function App() {

  const queryClient = new QueryClient({defaultOptions: {
    mutations: {
      onError: (res: any) => {
        const result = res as AxiosError
        if(result?.response?.status === 401){
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.href = "/"
        }
      },
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
