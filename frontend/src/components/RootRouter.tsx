import {Route, Routes} from "react-router-dom";
import {ThankYouPage} from "./ThankYouPage.tsx";
import {ReservationPage} from "./ReservationPage.tsx";

const AppRoutes = {
    MainRoute: "/",
    ThankYouRoute: "/thanks"
}

export const RootRouter = () => {
    return (
        <Routes>
            <Route path={AppRoutes.MainRoute} element={<ReservationPage />}/>
            <Route path={AppRoutes.ThankYouRoute} element={<ThankYouPage />}/>
        </Routes>
    )
}
