import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { notes } from './../src/notes';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/note/:id (GET)', () => {
    const expected = notes[0];
    return request(app.getHttpServer())
      .get('/note/73834b0f-414f-4688-8a9a-fb37cdd466fd')
      .expect(200)
      .expect(expected);
  });
});
