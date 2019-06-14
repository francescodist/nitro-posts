const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/posts/list', (req, res) => {
    const mockDataString = fs.readFileSync(path.join(__dirname, 'mock-data.json'), 'utf8');
    res.json(JSON.parse(mockDataString));
});

app.listen(port, () => {
    console.log(`Mock Server Listening on Port ${3000}`);
});