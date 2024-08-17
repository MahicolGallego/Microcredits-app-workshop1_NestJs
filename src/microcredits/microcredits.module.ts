import { Module } from '@nestjs/common';
import { MicrocreditController } from './microcredits.controller';
import { MicrocreditService } from './microcredits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Microcredit ])],
  controllers: [MicrocreditController],
  providers: [MicrocreditService]
})
export class MicrocreditModule {}
