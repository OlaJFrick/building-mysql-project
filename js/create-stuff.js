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

async function pet(name, date, species, race, ownerId) {

    let p = await query.query(`
        INSERT pets
        VALUES(NULL, '${name}', '${date}', '${species}', '${race}', '${ownerId}')
    `);

    console.log(`SUCCESS.
        A new Pet:
        ${name}
        was created with the ID of ${p.insertId}
    `);
}

async function feedingbowl(color, material, volume, petid) {

    let bowl = await query.query(`
        INSERT feedingbowls
        VALUES(NULL, '${color}', '${material}', '${volume}', '${petid}')
    `);

    console.log(`SUCCESS.
        A new ${color} Bowl:
        was created with the ID of ${bowl.insertId}
    `);
}

module.exports = {
    owner: owner,
    address: address,
    pet: pet,
    feedingbowl: feedingbowl
}
