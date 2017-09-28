const query = require('./query-maker.js');

async function singleQ(collection, prop, val, niceformat) {

    let singleSearch = await query.query(`SELECT * FROM ${collection} WHERE ${prop} = '${val}'`);

    if (singleSearch.length === 0) {
        console.log(`
            OOPS!
            Your Search for "${val}" as ${prop}
            was not found in the
            db collection "${collection}"
        `);
    }

    // User specifies if they wish formated or unformated display in console
    niceformat ? formated() : console.log(singleSearch);;

    async function formated() {
        let niceFormat = [];
        if (collection === 'owners') {
            for (let o of singleSearch) {
                if (niceFormat.length !== singleSearch.length) {
                    niceFormat.push(`id: ${o.id} name: ${o.firstname} ${o.lastname}`);
                }
            }

        } else if (collection === 'addresses') {
            for (let a of singleSearch) {
                if (niceFormat.length !== singleSearch.length) {
                    niceFormat.push(`id: ${a.id} street: ${a.street} zipcode: ${a.zipcode} city: ${a.city}`);
                }
            }
        }
        console.log(niceFormat);
    }
}

async function owner(firstname) {
    let owner = await query.query(`SELECT * FROM owners WHERE firstname = '${firstname}'`);
}

async function allOwners() {

    let owners = await query.query('SELECT * FROM owners');
    let niceFormat = [];

    for (let owner of owners) {
        if (niceFormat.length !== owners.length) {
            niceFormat.push(`id: ${owner.id} name: ${owner.firstname} ${owner.lastname}`);
        }
    }
    console.log(niceFormat);
}

async function allAddresses() {

    let addresses = await query.query('SELECT * FROM addresses');
    let niceFormat = [];

    for (let address of addresses) {
        if (niceFormat.length !== addresses.length) {
            niceFormat.push(`id: ${address.id} street: ${address.street} zipcode: ${address.zipcode} city: ${address.city}`);
        }
    }

    console.log(niceFormat);
}

async function owners_addresses() {
    let owners_addresses = await query.query(
        `SELECT * FROM owners
        LEFT JOIN addresses
        ON owners.addressId = addresses.id`
    );
    let niceFormat = [];

    // console.log(owners_addresses);

    for (let oa of owners_addresses) {
        if (niceFormat.length !== owners_addresses.length) {
            niceFormat.push(`id: ${oa.id} name: ${oa.firstname} ${oa.lastname}, Resides on address: street: ${oa.street} zipcode: ${oa.zipcode} city: ${oa.city}`);
        }
    }
    console.log(niceFormat);
}

module.exports = {
    singleQ: singleQ,
    owner: owner,
    allOwners: allOwners,
    allAddresses: allAddresses,
    owners_addresses: owners_addresses
}
