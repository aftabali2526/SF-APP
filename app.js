// Import required modules
const express = require('express');
const fs = require('fs');

// Create Express application
const app = express();
const port = 3000;

// Define route to fetch data from static JSON file
app.get('/api/data', (req, res) => {
    // Read data from static JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // Parse JSON data and send it in response
        res.json(JSON.parse(data));
    });
});

// Define route to fetch specific data item by ID
app.get('/api/data/:id', (req, res) => {
    // Read data from static JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // Parse JSON data and find item by ID
        const jsonData = JSON.parse(data);
        const id = req.params.id;
        const item = jsonData.find(item => item.id === id);
        if (!item) {
            res.status(404).json({ error: 'Item not found' });
            return;
        }
        // Send item in response
        res.json(item);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
