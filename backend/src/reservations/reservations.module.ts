import { ReservationsService } from './reservations.service'
import { ReservationsController } from './reservations.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Reservation } from './reservation-entities'
import { Module } from '@nestjs/common'

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  exports: [TypeOrmModule],
  providers: [ReservationsService],
  controllers: [ReservationsController],
})
export class ReservationsModule {}
