import {
  IsDate,
  IsDateString,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsPhoneNumber,
} from 'class-validator'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'timestamptz' })
  from: Date

  @Column({ type: 'timestamptz' })
  to: Date

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @CreateDateColumn()
  created_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export class CreateReservationDTO {
  @IsDateString()
  from: string

  @IsDateString()
  to: string

  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string

  // @IsPhoneNumber()
  @IsNotEmpty()
  phone: string
}
