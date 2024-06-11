import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { BorrowService } from './borrow.service';
import { Borrow } from './borrow.entity';

@Controller('borrows')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Get()
  findAll(): Promise<Borrow[]> {
    return this.borrowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Borrow> {
    return this.borrowService.findOne(id);
  }

  @Post()
  create(@Body() borrow: Borrow): Promise<Borrow> {
    return this.borrowService.create(borrow);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() borrow: Borrow): Promise<Borrow> {
    return this.borrowService.update(id, borrow);
  }

  @Patch(':id/return')
  returnBook(@Param('id') id: number, @Body('returnDate') returnDate: Date): Promise<Borrow> {
    return this.borrowService.returnBook(id, returnDate);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.borrowService.remove(id);
  }
}
