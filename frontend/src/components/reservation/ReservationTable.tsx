import {Button, Modal, Stack, Typography} from "@mui/material";
import {useCallback, useState} from "react";
import {CreateReservationForm} from "./CreateReservationForm.tsx";

export const ReservationTable = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const handleCreateReservationClick = useCallback(() => {
        setModalOpen(true)
    }, [setModalOpen])

    return (
        <>
            <Stack>
               <Typography>Reservation table</Typography>
               <Button onClick={handleCreateReservationClick}>Create reservation</Button>
                <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                >
                    <CreateReservationForm />
                </Modal>
            </Stack>
    </>
    )
}
