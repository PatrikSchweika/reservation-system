import { Injectable } from '@nestjs/common'
import { Reservation, CreateReservationDTO } from './reservation-entities'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>,
  ) {}

  findAll(): Promise<Reservation[]> {
    return this.reservationsRepository.find()
  }

  findOne(id: number): Promise<Reservation | null> {
    return this.reservationsRepository.findOneBy({ id })
  }

  create(reservation: CreateReservationDTO): Promise<Reservation> {
    return this.reservationsRepository.save(reservation)
  }

  async delete(id: number): Promise<void> {
    await this.reservationsRepository.delete(id)
  }
}
