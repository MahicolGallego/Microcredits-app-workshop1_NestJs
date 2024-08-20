import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

// With 1. Principio S (Single Responsibility Principle) - Principio de Responsabilidad Única
@Injectable()
export class CreditCalculationService {
  calculateInterestRate(user: User): number {
    return user.credit_score > 700 ? 5 : 15;
  }
}

@Injectable()
export class MicrocreditRegistryService {
  saveMicrocredit(microcredit: Microcredit): void {
    // Lógica para guardar el microcrédito en la base de datos
  }
}

@Injectable()
export class MicrocreditService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService,
  ) {}

  async applyForMicrocredit(
    userId: string,
    amount: number,
  ): Promise<Microcredit> {
    const user = await this.userRepository.findOne({ where: { id: +userId } });
    const interestRate =
      this.creditCalculationService.calculateInterestRate(user);
    const microcredit = new Microcredit();

    microcredit.amount = amount;
    microcredit.interest_rate = interestRate;
    microcredit.status = 'PENDING';
    microcredit.user = user;
    this.microcreditRegistryService.saveMicrocredit(microcredit);
    return microcredit;
  }
}

//with 2. Principio O (Open/Closed Principle) - Principio de Abierto/Cerrado

// interface InterestRateStrategy {
//   calculate(user: User): number;
// }

// @Injectable()
// export class StandardInterestRateStrategy implements InterestRateStrategy {
//   calculate(user: User): number {
//     return user.credit_score > 700 ? 5 : 15;
//   }
// }

// @Injectable()
// export class PremiumInterestRateStrategy implements InterestRateStrategy {
//   calculate(user: User): number {
//     return user.credit_score > 700 ? 3 : 10;
//   }
// }

// @Injectable()
// export class CreditCalculationService {
//   private strategy: InterestRateStrategy;

//   constructor(strategy: InterestRateStrategy) {
//     this.strategy = strategy;
//   }

//   calculateInterestRate(user: User): number {
//     return this.strategy.calculate(user);
//   }
// }

//with 3. Principio L (Liskov Substitution Principle) - Principio de Sustitución de Liskov

// class Microcredit {
//     apply(): void {
//       // Lógica genérica para aplicar un microcrédito
//     }
//   }

//   class BasicMicrocredit extends Microcredit {
//     // No es necesario sobrescribir el método apply si no altera el comportamiento
//   }

//   class AdvancedMicrocredit extends Microcredit {
//     // Aquí podrías extender el comportamiento si es necesario, pero sin romper el contrato
//   }
