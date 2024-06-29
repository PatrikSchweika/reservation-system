
import './App.css'
import {RootRouter} from "./RootRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {

  return (
    <>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <RootRouter />
            </QueryClientProvider>
        </BrowserRouter>

    </>
  )
}

export default App
