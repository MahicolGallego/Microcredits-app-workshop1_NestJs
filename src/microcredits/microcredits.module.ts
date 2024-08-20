import { Module } from '@nestjs/common';
import { MicrocreditController } from './microcredits.controller';
import { MicrocreditService } from './microcredits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Microcredit, User])],
  controllers: [MicrocreditController],
  providers: [MicrocreditService],
})
export class MicrocreditModule {}
