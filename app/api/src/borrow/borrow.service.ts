import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrow } from './borrow.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private readonly borrowRepository: Repository<Borrow>,
  ) {}

  findAll(): Promise<Borrow[]> {
    return this.borrowRepository.find({ relations: ['user', 'book'] });
  }

  findOne(id: number): Promise<Borrow> {
    return this.borrowRepository.findOne({ where: { borrowId: id }, relations: ['user', 'book'] });
  }

  async create(borrow: Borrow): Promise<Borrow> {
    const activeBorrow = await this.borrowRepository.findOne({
      where: {
        book: { bookId: borrow.book.bookId },
        isActive: true,
      },
    });

    if (activeBorrow) {
      throw new Error('This book is currently borrowed and cannot be borrowed again until it is returned.');
    }

    borrow.isActive = true;
    return this.borrowRepository.save(borrow);
  }

  async update(id: number, borrow: Partial<Borrow>): Promise<Borrow> {
    const existingBorrow = await this.borrowRepository.findOne({ where: { borrowId: id } });
    if (!existingBorrow) {
      throw new Error('Borrow record not found.');
    }

    if (borrow.duration !== undefined) {
      existingBorrow.duration = borrow.duration;
    }

    return this.borrowRepository.save(existingBorrow);
  }

  async returnBook(id: number, returnDate: Date): Promise<Borrow> {
    const existingBorrow = await this.borrowRepository.findOne({ where: { borrowId: id } });
    if (!existingBorrow) {
      throw new Error('Borrow record not found.');
    }

    existingBorrow.returnDate = returnDate;
    existingBorrow.isActive = false;

    return this.borrowRepository.save(existingBorrow);
  }

  async remove(id: number): Promise<void> {
    await this.borrowRepository.delete(id);
  }
}
