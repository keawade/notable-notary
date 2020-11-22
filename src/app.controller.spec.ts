import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { notes } from './notes';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('/note', () => {
    it('should return note', () => {
      const expected = notes[0];
      const actual = appController.getNote('73834b0f-414f-4688-8a9a-fb37cdd466fd');

      expect(actual).toStrictEqual(expected);
    });
  });
});
