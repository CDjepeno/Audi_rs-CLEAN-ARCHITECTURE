import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./Car";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Car, (car) => car.owner, {nullable: false} )
}
