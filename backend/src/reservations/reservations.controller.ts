import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ReservationsService } from './reservations.service'
import { Reservation, CreateReservationDTO } from './reservation-entities'

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationsService) {}

  @Get()
  getReservations(): Promise<Reservation[]> {
    return this.reservationService.findAll()
  }

  @Post()
  createReservation(
    @Body() request: CreateReservationDTO,
  ): Promise<Reservation> {
    return this.reservationService.create(request)
  }

  @Get(':id')
  getReservation(@Param('id') id: number): Promise<Reservation | null> {
    return this.reservationService.findOne(id)
  }

  @Delete(':id')
  deleteReservation(@Param('id') id: number): Promise<void> {
    return this.reservationService.delete(id)
  }
}
