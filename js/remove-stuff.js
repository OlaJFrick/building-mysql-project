const query = require('./query-maker.js');

async function removeItem(collection, currentProp, currentValue) {

    let remove = await query.query(`
        DELETE FROM ${collection}
        WHERE ${currentProp} = '${currentValue}'
    `);

    console.log(remove);

    if (remove.affectedRows === 0) {
        console.log(`
            OOPS!
            You tried to update the "${currentProp}" ${currentValue}
            Which was not found in the
            db collection "${collection}"
        `);
    } else {
        console.log(`SUCCESS.
            You removed the item with "${currentProp}" ${currentValue}
        `);

    }
}

async function manualRemove() {

    let removedItem = await query.query(`DELETE FROM owners WHERE firstname = "Mysk"`);
    let success = 'SUCCES! Updated',
        fail = 'OOPS! You tried to update something that doesn\'t exist anymore';

    removedItem.affectedRows !== 0 ? console.log(success) : console.log(fail);
}

module.exports = {
    removeItem: removeItem,
    manualRemove: manualRemove
}
