const query = require('./js/query-maker.js');
const create = require('./js/create-stuff.js');
const update = require('./js/update-stuff.js');
const remove = require('./js/remove-stuff.js');
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

async function updateFuncs() {
    // singleUpdate expects args (collection, findProp, findValue, changeProp, changeValue);
    update.singleUpdate('owners', 'firstname', 'Harald', 'firstname', 'Mysk');
    // or do more complex update in manualUpdate() ./js/update-stuff.js
    update.manualUpdate();
}

async function removeFuncs() {
    // removeItem expects args (collection, findProp, findValue);
    remove.removeItem('owners', 'id', 8);
    // or do more complex update in manualDelete() ./js/remove-stuff.js
    remove.manualRemove();
}

// displayFuncs();
// createFuncs();
// updateFuncs();
// removeFuncs();
display.owners_addresses();
query.dbEnd();
