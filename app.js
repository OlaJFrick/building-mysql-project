// Setting up Express
const express = require('express');
const app = express();
const host = 'http://localhost';
const port = '3000';

// Adding Middleware
app.use(myLogger);

app.use(express.static('./www'));

app.listen(port, ()=> console.log(`Listning on Port ${port}`));

function myLogger(req, res, next) {
    console.log(`${req.hostname}:${port}${req.url}`);
    next();
}

function myNextLogger(req, res, next) {
    if(req.url === '/test'){
        res.end('Whowa Wiiwa');
    } else {
        next();
    }
}
