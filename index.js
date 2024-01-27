const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

// Rate limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 1 minute
  max: 10, // 10 requests
});

// Middleware
app.use(limiter);
app.set('trust proxy', 1);

// Set static folder
app.use(express.static('public'));

// Routes
app.use('/api', require('./routes/index'));

// Enable cors
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}..`);
});
