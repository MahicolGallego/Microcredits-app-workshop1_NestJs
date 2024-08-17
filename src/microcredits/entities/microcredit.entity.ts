import { IsInt, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("microcredits")
export class Microcredit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    interest_rate: number;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.microcredits)
    @JoinColumn({name: "user_id"})
    user: User;
}
