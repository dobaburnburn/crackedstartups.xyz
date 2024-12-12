const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// In-memory storage for reviews
let reviews = [];

// Endpoint to get all reviews
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Endpoint to submit a new review
app.post('/reviews', (req, res) => {
    const { name, review } = req.body;
    reviews.push({ name, review });
    res.send('Review submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
