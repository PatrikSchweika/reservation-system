import {Route, Routes} from "react-router-dom";
import {ThankYouPage} from "../ThankYouPage.tsx";
import {ReservationPage} from "../ReservationPage.tsx";
import {APP_ROUTES} from "./routes.ts";


export const RootRouter = () => {
    return (
        <Routes>
            <Route path={APP_ROUTES.MainRoute} element={<ReservationPage />}/>
            <Route path={APP_ROUTES.ThankYouRoute} element={<ThankYouPage />}/>
        </Routes>
    )
}
