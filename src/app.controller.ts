import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { INote } from './notes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('notes')
  getNotes(): INote[] {
    return this.appService.getAllNotes();
  }

  @Get('note/:id')
  getNote(@Param('id') id: string): INote {
    return this.appService.getNote(id);
  }
}
