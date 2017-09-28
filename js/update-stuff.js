const query = require('./query-maker.js');

async function singleUpdate(collection, currentProp, currentValue, changeProp, changeValue) {
    let updatedItem = await query.query(`
        UPDATE ${collection}
        SET ${changeProp} = '${changeValue}'
        WHERE ${currentProp} = '${currentValue}'
    `);

    if (updatedItem.changedRows === 0) {
        console.log(`
            OOPS!
            You tried to update the "${currentProp}" ${currentValue}
            Which was not found in the
            db collection "${collection}"
        `);
    } else {
        console.log(`SUCCESS.
            You updated the "${currentProp}" ${currentValue}
            to "${changeProp}" ${changeProp}
        `);

    }
}

async function manualUpdate() {

    let updatedItem = await query.query(`
        UPDATE owners
        SET firstname = 'David', lastname = 'Bowie', addressId = 1
        WHERE firstname = 'David' && lastname = 'Bowie'
    `);

    let success = 'SUCCES! Updated',
        fail = 'OOPS! You tried to update something that doesn\'t exist or has already been updated';

    updatedItem.changedRows !== 0 ? console.log(success) : console.log(fail);
}

module.exports = {
    singleUpdate: singleUpdate,
    manualUpdate: manualUpdate
}
