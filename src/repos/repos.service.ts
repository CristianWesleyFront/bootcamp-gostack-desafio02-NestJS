import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repos } from './repos.entity';
import { Repository, Connection, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class ReposService {
  constructor(
    @InjectRepository(Repos)
    private readonly reposRepository: Repository<Repos>,
    private connection: Connection,
  ) {}
  list(): Promise<Repos[]> {
    return this.reposRepository.find();
  }

  listOne(id: number): Promise<Repos> {
    return this.reposRepository.findOne(id);
  }

  async create(repo: Repos): Promise<Repos> {
    return this.reposRepository.save(repo);
  }

  async update(id: number, newData: Repos): Promise<UpdateResult> {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const currentRepo = await queryRunner.manager.findOne(Repos, id);

    if (!currentRepo)
      throw new HttpException(`Repo ${id} inexistente`, HttpStatus.BAD_REQUEST);

    try {
      const result = await queryRunner.manager.update(Repos, { id }, newData);

      await queryRunner.commitTransaction();

      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: number): Promise<DeleteResult> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const deleteResult = await queryRunner.manager.delete(Repos, { id });

      await queryRunner.commitTransaction();

      return deleteResult;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
