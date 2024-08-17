import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FinancialHistoryModule } from './financial-history/financial-history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { FinancialHistory } from './financial-history/entities/financial-history.entity';
import { MicrocreditModule } from './microcredits/microcredits.module';
import { Microcredit } from './microcredits/entities/microcredit.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './expections-filters/exception-http.filter';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Rlwl2023.",
    database: "microcredits_app",
    entities: [User, FinancialHistory, Microcredit],
    // autoLoadEntities: true,
    synchronize: true,
  }),
    UsersModule, FinancialHistoryModule, MicrocreditModule],
    providers: [{
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }]
})
export class AppModule {}
