import { IsDate, IsInt, IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("financial_histories")
export class FinancialHistory{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @ManyToOne(() => User, user => user.financialHistory)
    @JoinColumn({name: "user_id"})
    user:User
}