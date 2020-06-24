import { Test, TestingModule } from '@nestjs/testing';
import { ReposController } from './repos.controller';

describe('Repos Controller', () => {
  let controller: ReposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReposController],
    }).compile();

    controller = module.get<ReposController>(ReposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
