import { Injectable } from '@nestjs/common';
import { INote, notes } from './notes';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNote(id: string): INote {
    return notes.find((note) => note.id === id);
  }

  getAllNotes(): INote[] {
    return notes;
  }
}
