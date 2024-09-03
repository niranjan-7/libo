import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

import { Book } from './book/book.entity';
import { BookService } from './book/book.service';
import { BookController } from './book/book.controller';

import { BookSet } from './bookSet/bookSet.entity';
import { BookSetService } from './bookSet/bookSet.service';
import { BookSetController } from './bookSet/bookSet.controller';

import { Comment } from './comment/comment.entity';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';

import { Borrow } from './borrow/borrow.entity';
import { BorrowService } from './borrow/borrow.service';
import { BorrowController } from './borrow/borrow.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://libo_user:HGx2yJWG6nsp5dVBzUXwMxKNiMS2LArW@dpg-crbmlqrv2p9s73dipd50-a.singapore-postgres.render.com/libo',
      entities: [User, Book, BookSet, Comment, Borrow],
      synchronize: true, 
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([User, Book, BookSet, Comment, Borrow]),
    UserModule,
    AuthModule,
  ],
  controllers: [UserController, BookController, BookSetController, CommentController, BorrowController],
  providers: [UserService, BookService, BookSetService, CommentService, BorrowService, JwtService],
})
export class AppModule {}
