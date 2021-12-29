// Express modules import
const express = require('express');

// Start of the app and port creation
const app = express();
const PORT = process.env.PORT || 3001;

// api routes import
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// route Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// use of api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`API server is now on port ${PORT}!`));

