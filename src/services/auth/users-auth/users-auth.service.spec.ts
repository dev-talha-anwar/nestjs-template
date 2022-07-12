import { Test, TestingModule } from '@nestjs/testing';
import { UsersAuthService } from './users-auth.service';

describe('UsersAuthService', () => {
  let service: UsersAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersAuthService],
    }).compile();

    service = module.get<UsersAuthService>(UsersAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
