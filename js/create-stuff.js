const query = require('./query-maker.js');

async function owner(firstname, lastname, addressId) {

    let o = await query.query(`
        INSERT owners
        VALUES(Null, '${firstname}', '${lastname}', '${addressId}')
    `);

    console.log(`SUCCESS.
        A new owner:
        ${firstname} ${lastname}
        was created with the ID of ${o.insertId}
    `);
}

async function address(street, zip, city) {

    let a = await query.query(`
        INSERT addresses
        VALUES(NULL, '${street}', '${zip}', '${city}')
    `);

    console.log(`SUCCESS.
        A new address:
        ${street} ${zip} in ${city}
        was created with the ID of ${a.insertId}
    `);
}

module.exports = {
    owner: owner,
    address: address
}
