const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Custom middleware (curl logger)
const logger = require('./middleware/logger');
app.use(logger);

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

module.exports = app;