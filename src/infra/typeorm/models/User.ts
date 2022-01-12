import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Car } from "./Car";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastnamer: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Car, (car) => car.owner, {nullable: false} )
  cars: Car[]
}
