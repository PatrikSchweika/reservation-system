import {CreateReservationDTO, Reservation} from "./reservation-entities.ts";
import {API_CLIENT} from "../client/api-client.ts";

const RESERVATIONS_URL = 'reservations'

export const getAllReservations = () =>
    API_CLIENT.get<Reservation[]>(RESERVATIONS_URL)
        .then(res => res.data)

export const createReservation = (reservation: CreateReservationDTO) =>
    API_CLIENT.post<Reservation>(RESERVATIONS_URL, reservation)