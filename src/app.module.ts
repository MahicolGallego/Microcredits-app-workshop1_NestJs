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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, FinancialHistory, Microcredit],
        // autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
    }),
    UsersModule,
    FinancialHistoryModule,
    MicrocreditModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
