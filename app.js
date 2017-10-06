// Setting up Express
const express = require('express');
const app = express();
const RestSql = require('./classes/rest-sql.class');

app.locals = {
    db: 'mySql',
    title: 'petregister',
    hostUrl: 'http://localhost',
    port: '3000'
}

// Adding Middleware by calling the static start method in ./classes/rest-sql.class
app.use(RestSql.start({
    sqlSettings: {
        host: "127.0.0.1",
        hostUrl: app.locals.hostUrl,
        user: "root",
        password: "popo",
        database: app.locals.title
    },
    baseUrl: '/rest',
    rejectOnErrors: false,
    specialIDs: {
      petowners: 'pnr'
    },
}));

app.use(express.static('./www'));

app.listen(app.locals.port, ()=> console.log(`Listning on Port ${app.locals.port}`));
