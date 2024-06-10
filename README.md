## Library Management System

This repository contains the backend code for a Library Management System, built using TypeORM and Nest.js. The system includes the following entities: Book, BookSet(WIP), Borrow, Comment(WIP), and User.


## Installation
Clone this repor and update the db uri in .env and install the necessary dependencies, run:
```ts
npm install
```

To run the program in development mode, use:
```ts
npm run dev
```

## Endpoints


# Book
GET /books: Retrieve all books.
GET /books/: Retrieve a single book by ID.
POST /books: Create a new book.
PUT /books/: Update a book by ID.
DELETE /books/: Delete a book by ID.


BookSet
GET /booksets: Retrieve all book sets.
GET /booksets/
: Retrieve a single book set by ID.
POST /booksets: Create a new book set.
PUT /booksets/
: Update a book set by ID.
DELETE /booksets/
: Delete a book set by ID.


Borrow
GET /borrows: Retrieve all borrows.
GET /borrows/
: Retrieve a single borrow by ID.
POST /borrows: Create a new borrow record.
PUT /borrows/
: Update a borrow by ID.
DELETE /borrows/
: Delete a borrow by ID.


Comment
GET /comments: Retrieve all comments.
GET /comments/
: Retrieve a single comment by ID.
POST /comments: Create a new comment.
PUT /comments/
: Update a comment by ID.
DELETE /comments/
: Delete a comment by ID.


User
GET /users: Retrieve all users.
GET /users/
: Retrieve a single user by ID.
POST /users: Create a new user.
PUT /users/
: Update a user by ID.
DELETE /users/
: Delete a user by ID.


Running the Program
To start the development server, use the following command:

npm run dev
