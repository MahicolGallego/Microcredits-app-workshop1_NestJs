import { IsInt, IsString, MinLength} from "class-validator";
import { FinancialHistory } from "src/financial-history/entities/financial-history.entity";
import { Microcredit } from "src/microcredits/entities/microcredit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: String

    @Column()
    @IsInt()
    credit_score: number;

    @OneToMany(() => FinancialHistory, financialHistory => financialHistory.user)
    financialHistory: FinancialHistory[];

    @OneToMany(() => Microcredit, microcredit => microcredit.user)
    microcredits: Microcredit[];
}