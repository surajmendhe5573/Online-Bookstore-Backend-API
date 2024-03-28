
# Online Bookstore

The online bookstore's backend API provides essential functionalities to ensure a seamless user experience. Users can register accounts, granting access to personalized features like saved preferences and order tracking, and securely log in thereafter.

The platform offers extensive browsing options, allowing users to discover books by title, author, or keywords. Detailed book information assists users in making informed choices.

The shopping cart feature enables users to conveniently collect desired books before checkout. Users can review and adjust their selections, including removing items as needed.

## Features

- User Registration: Allow users to create an account.
- User Login: Enables users to log in to their accounts.
- Browse Books: Display a list of available books for users to browse.
- Search Books: Allow users to search for books by title or author.
- View Book Details: Show detailed information about a selected book.
- Add to Cart: Allow users to add books to their shopping cart.
- View Cart: Display the contents of the shopping cart.
- Remove Cart: Allow users to remove items from the shopping cart.


## API Reference

### Authentication
- Register User

```http
  POST api/auth/register
```
- Login User
```http
 POST api/auth/login
```

- Fetch All Users
```http
 POST /api/auth/fetch
```

### Book Details
- Add the books
```http
  POST api/books/addBooks
```
- Display All Books
```http
 GET api/books
```
- Search Book
```http
 GET api/books
```

- Search BookByID
```http
 GET api/books/:id
```

### Shopping Cart details
- Add to Cart

```http
  POST api/cart/:userID/add/:bookID
```
- View Cart
```http
 GET api/cart/:userID
```

- Remove Cart
```http
 DELETE /api/cart/:userID/remove/:bookID
```
## Installation

Install Online-Bookstore Backend API with npm

```bash
  npm install 
```
    
## Contributing

Contributions are always welcome!

## Happy Coding ...
