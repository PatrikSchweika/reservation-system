
import './App.css'
import {RootRouter} from "./routing/RootRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const queryClient = new QueryClient()

function App() {

  return (
    <>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <RootRouter />
                </LocalizationProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </>
  )
}

export default App
