const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 27017;

app.get('/', (req, res) => {
    res.send('server is running');
});


// Routes
const routes = require('./routes/routes');
app.use('/api/v1', routes);

app.listen(port, (error) => {
    if (error) {
        console.log('Error: ', error)
    } else {
        console.log('Server is running on port: ', port)
    }
});