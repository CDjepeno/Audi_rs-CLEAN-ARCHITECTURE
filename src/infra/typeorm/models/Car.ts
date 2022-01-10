import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  km: number;

  @Column()
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user)
  owner: User;

  @Column()
  available: boolean;
}
