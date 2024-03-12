import { Test, TestingModule } from '@nestjs/testing';
import { EcgController } from './controller/ecg.controller';
import { EcgService } from './service/ecg.service';

describe('AppController', () => {
  let appController: EcgController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EcgController],
      providers: [EcgService],
    }).compile();

    appController = app.get<EcgController>(EcgController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
