import { IsEmail, IsString } from "class-validator";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Car } from "./Car";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  firstname: string;

  @Column()
  @IsString()
  lastname: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @OneToMany(() => Car, (car) => car.ownerId, {nullable: false} )
  cars: Car[]
}
