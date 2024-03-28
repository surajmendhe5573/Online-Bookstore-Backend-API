const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Book = require('../models/book');

// Add to cart
router.post('/:userId/add/:bookId', async (req, res) => {    
  try {
    const { userId, bookId } = req.params;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {                                 // If the cart doesn't exist, create a new one
      cart = new Cart({ user: userId, items: [] });
    }

    const book = await Book.findById(bookId); 
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    cart.items.push({ book: bookId });    // Add the book to the cart
    await cart.save();
    res.json(cart);

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get the user's cart
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId }).populate('items.book');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove an item from the user's cart
router.delete('/:userId/remove/:itemId', async (req, res) => {
  try {
    const { userId, itemId } = req.params;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    // Remove the item from the cart
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;