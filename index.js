const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const authRoutes = require('./routes/auth');  // auth route
const bookRoutes = require('./routes/books'); // book routes
const cartRoutes = require('./routes/cart'); //  cart routes
const app = express();

app.use(bodyParser.json());  // Middleware

// Connect to MongoDB
mongoose.connect(config.database, {
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(err => console.error(err));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes); // Add the new book routes
app.use('/api/cart', cartRoutes); // Add the new cart routes
