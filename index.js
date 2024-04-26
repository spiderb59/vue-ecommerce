const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define route to redirect to Vue.js frontend
app.get('/', (req, res) => {
  res.redirect('/front-end'); // Redirect to your Vue.js frontend route
});

// Serve the Vue.js application
app.use('/front-end', express.static(path.join(__dirname, 'front-end')));

// Catch-all route to serve the Vue.js application
app.get('/front-end/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

