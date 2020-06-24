import { Test, TestingModule } from '@nestjs/testing';
import { ReposService } from './repos.service';

describe('ReposService', () => {
  let service: ReposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReposService],
    }).compile();

    service = module.get<ReposService>(ReposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
