import {Stack, Typography} from "@mui/material";
import {useCallback, useMemo, useState} from "react";
import {CreateReservationDialog} from "./CreateReservationDialog.tsx";
import {useReservations} from "./reservation-queries.ts";
import {Calendar, momentLocalizer, SlotInfo, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)


export const ReservationTable = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null)

    const { reservations } = useReservations()

    const events = useMemo(() => {
        return reservations.map(reservation => ({
            title: reservation.name,
            start: new Date(reservation.from),
            end: new Date(reservation.to)
        }))
    }, [reservations])

    const handleSelectSlot = useCallback((slot: SlotInfo) => {
        const overlap = events.some(event =>
            slot.end > event.start && slot.start < event.end
        )

        if (!overlap) {
            setSelectedSlot(slot)
            setDialogOpen(true)
        }
    }, [events, setSelectedSlot, setDialogOpen])

    return (
        <>
            <Stack>
               <Typography>Reservation table</Typography>
                <Calendar
                    localizer={localizer}
                    events={events}
                    onSelectSlot={handleSelectSlot}
                    popup
                    selectable
                    defaultView={Views.WEEK}
                />
                { selectedSlot && <CreateReservationDialog open={dialogOpen} onClose={() => setDialogOpen(false)} startDate={selectedSlot.start} endDate={selectedSlot.end} /> }
            </Stack>
    </>
    )
}
