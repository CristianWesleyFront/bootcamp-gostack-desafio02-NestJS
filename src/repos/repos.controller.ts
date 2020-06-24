import {
  Controller,
  Get,
  Body,
  Delete,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { Repos } from './repos.entity';
import { ReposService } from './repos.service';

@Controller('repositories')
export class ReposController {
  constructor(private reposService: ReposService) {}

  @Get()
  list(): Promise<Repos[]> {
    return this.reposService.list();
  }

  @Get(':id')
  get(@Param('id') id: number): Promise<Repos> {
    return this.reposService.listOne(id);
  }

  @Post()
  saveOne(@Body() repo: Repos): Promise<Repos> {
    return this.reposService.create(repo);
  }

  @Put(':id')
  updateOne(
    @Param('id') id: number,
    @Body() newData: Repos,
  ): Promise<UpdateResult> {
    return this.reposService.update(id, newData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.reposService.delete(id);
  }
}
