
export interface Reservation {
  id: number
  from: string
  to: string
  name: string
  email: string
  phone: string
}

export type CreateReservationDTO = Omit<Reservation, 'id'>