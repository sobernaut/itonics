const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

// Adds json parsing middleware
app.use(express.json());

// Setup static directory to serve
app.use(express.static(path.resolve('dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
