import {Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {APP_ROUTES} from "./routing/routes.ts";

export const ThankYouPage = () => {
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        navigate(APP_ROUTES.MainRoute)
    }, [navigate])

    return (
        <Stack>
            <Typography>Thank you!</Typography>
            <Button onClick={handleClick}>Back to calendar</Button>
        </Stack>

    )
}
