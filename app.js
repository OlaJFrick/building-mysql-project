const query = require('./js/query-maker.js');
const create = require('./js/create-stuff.js');
const display = require('./js/display-stuff.js');

async function allFuncs() {

    display.singleQ('owners', 'firstname', 'Carina', true);
    display.singleQ('addresses', 'street', 'Almbacksgatan 16', true);
    display.owner('Ola');
    // display.allQ();

    // create.owner('Mikaela', 'Jarl', 5);
    // create.address('Benbrytargränd 2', 23135, 'Ystad');


    // display.single('addresses', 'street', 'Almbacksgatan 16');
    // display.addresses();
    // display.owners_addresses();
}



allFuncs();
query.dbEnd();
