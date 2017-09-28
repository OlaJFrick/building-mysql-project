const query = require('./js/query-maker.js');
const create = require('./js/create-stuff.js');
const display = require('./js/display-stuff.js');

async function displayFuncs() {
    // singleQ expects args (collection, prop, query, niceformat(bool));
    display.singleQ('owners', 'firstname', 'Carina', true);
    display.singleQ('addresses', 'street', 'Almbacksgatan 16', true);
    display.owner('Carina');
    display.allOwners();
    display.allAddresses();
    display.owners_addresses();
}

async function createFuncs() {
    // create.owner('Micke', 'Bong', 5);
    create.address('Benbrytargränd 2', 23135, 'Ystad');
}

displayFuncs();
createFuncs();
query.dbEnd();
