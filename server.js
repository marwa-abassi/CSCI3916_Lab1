const express = require('express');
const app = express();

// Middleware to parse text/plain bodies
app.use(express.text());

app.get('/', (req, res) => {
    res.send('Echo server is running. Send a POST request to / with a body to echo it back.');
});

app.post('/', (req, res) => {
    console.log('Received body:', JSON.stringify(req.body));
    res.send(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Echo server running on port ${port}`);
});

module.exports = app;