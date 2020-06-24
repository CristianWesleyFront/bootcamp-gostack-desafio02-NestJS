import { Module } from '@nestjs/common';
import { ReposService } from './repos.service';
import { ReposController } from './repos.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Repos } from './repos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repos])],
  exports: [TypeOrmModule],
  providers: [ReposService],
  controllers: [ReposController],
})
export class ReposModule {}
