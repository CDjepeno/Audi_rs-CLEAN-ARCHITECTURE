import { IsInt } from "class-validator";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("text")
  km: number;

  @Column("integer")
  @IsInt()
  price: number;

  @Column("varchar")
  image: string;

  @ManyToOne(() => User, (user) => user)
  owner: User;

  @Column("integer")
  @IsInt()
  ownerId: number;

  @Column()
  available: boolean;
}
