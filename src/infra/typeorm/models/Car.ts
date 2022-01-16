import { IsInt, IsString } from "class-validator";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  @IsString()
  name: string;

  @Column("integer")
  @IsInt()
  km: number;

  @Column("integer")
  @IsInt()
  price: number;

  @Column("varchar")
  @IsString()
  image: string;

  @ManyToOne(() => User, (user) => user)
  owner: User;

  @Column("integer")
  @IsInt()
  ownerId: number;

  @Column()
  available: boolean;
}
