const query = require('./js/query-maker.js');
const create = require('./js/create-stuff.js');
const update = require('./js/update-stuff.js');
const remove = require('./js/remove-stuff.js');
const display = require('./js/display-stuff.js');
const fillDb = require('./js/fill-db.js');

async function displayFuncs() {
    // * singleQ expects args (collection, prop, query, niceformat(bool));
    // display.singleQ('owners', 'firstname', 'Carina', true);
    // display.singleQ('addresses', 'street', 'Almbacksgatan 16', true);
    // display.owner('Carina');
    // display.allOwners();
    // display.allAddresses();
    display.allPets();
    // display.owners_addresses();
}

async function createFuncs() {
    // create.owner('Joshua', 'Floyd', 5);
    // create.address('Vasagränd 21', 23321, 'Malmö');
    // create.pet('George', '2001-07-23', 'katt', 'bondkatt', 6)

}

async function updateFuncs() {
    // * singleUpdate expects args (collection, findProp, findValue, changeProp, changeValue);
    update.singleUpdate('owners', 'firstname', 'Harald', 'firstname', 'Mysk');
    // * or do more complex update in manualUpdate() ./js/update-stuff.js
    update.manualUpdate();
}

async function removeFuncs() {
    // * removeItem expects args (collection, findProp, findValue);
    // remove.removeItem('owners', 'id', 8);
    // remove.removeItem('pets', 'id', 2);
    // * or do more complex update in manualDelete() ./js/remove-stuff.js
    remove.manualRemove();
}

// displayFuncs();
// createFuncs();
// updateFuncs();
// removeFuncs();
// fillDb.fillDb();
// display.owners_addresses();
query.dbEnd();
