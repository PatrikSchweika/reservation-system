import {useMutation, useQuery, useQueryClient} from "react-query";
import {createReservation, getAllReservations} from "./reservation-api.ts";

const ALL_RESERVATIONS_KEY = 'reservations'

export const useReservations = () => {
    const { data, ...rest } = useQuery(ALL_RESERVATIONS_KEY, getAllReservations)

    return { reservations: data ?? [], ...rest }
}

export const useCreateReservation = () => {
    const client = useQueryClient()

    const { mutate, mutateAsync, ...rest } = useMutation(createReservation, {
        onSettled: () => client.invalidateQueries(ALL_RESERVATIONS_KEY)
    })

    return { createReservation: mutate, createReservationAsync: mutateAsync, ...rest }
}