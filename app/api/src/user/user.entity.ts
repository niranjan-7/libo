import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { Borrow } from '../borrow/borrow.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userId: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  collegeName: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column({ unique: true })
  username: string;

  @ApiProperty()
  @Column({ unique: true })
  password: string;

  @ApiProperty()
  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @ApiProperty()
  @OneToMany(() => Borrow, borrow => borrow.user)
  borrows: Borrow[];
}
