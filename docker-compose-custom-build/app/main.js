const express = require('express');
const app = express();
const port = 3000;

// GET request
app.get('/api/data', (req, res) => {
    res.send('This is a GET request');
});

// POST request
app.post('/api/data', (req, res) => {
    res.send('This is a POST request');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});