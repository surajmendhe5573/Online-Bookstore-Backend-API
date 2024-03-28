const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/addBooks', async(req,res)=>{
    try {
        
        const books= new Book(req.body)
        const {title}= books;
        const bookExist= await Book.findOne({title})

        if(bookExist){
            return res.status(400).json({message: 'Book already exist'})
        }

        const saveBook= await books.save()
        res.status(201).json(saveBook)

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// search by title and/or author
router.get('/searchBook', async (req, res) => {    
    try {
      const { title, author } = req.query;         
      let query = {};
      if (title) {
        query.title = { $regex: title, $options: 'i' };         // //To search books by title: GET /api/books?title=Harry Potter
      }
      if (author) {
        query.author = { $regex: author, $options: 'i' };       // To search books by author: GET /api/books?author=J.K. Rowling
      }
      const books = await Book.find(query);           // To search books by both title and author: GET /api/books?title=Harry Potter&author=J.K. Rowling
      res.json(books);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

// Get details of a specific book by ID
router.get('/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  module.exports = router;


module.exports = router;
