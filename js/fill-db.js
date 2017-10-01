const query = require('./query-maker.js');
const create = require('./create-stuff.js');

function fillDb() {

    const myTables = ['owners', 'addresses', 'pets', 'feedingbowls'];

    for(let i = 0; i < myTables.length; i++) {
        query.query(`
            ALTER TABLE ${myTables[i]} AUTO_INCREMENT = 1
        `);
    };

    // let a = query.query('ALTER TABLE addresses AUTO_INCREMENT = 1');

    // create.owner('Joshua', 'Floyd', 4);
    // create.owner('Harry', 'Nilsson', 6);
    // create.owner('Maja', 'Haganäs', 1);
    // create.owner('Sam', 'Thomas', 1);
    // create.owner('Peter', 'Thompson', 2);

    // create.address('Vasagränd 21', 23321, 'Malmö');
    // create.address('Almbacksgatan 16', 21154, 'Malmö');
    // create.address('Brogatan 1c', 21143, 'Malmö');
    // create.address('Stora Nygatan 1', 21150, 'Malmö');
    // create.address('Föreningsgstan 1c', 22243, 'Malmö');

    // create.pet('Harry', '2014-01-23', 'Katt', 'Vanlig', 3);
    // create.pet('Bosse', '1999-07-23', 'Ko', 'Vanlig', 2);
    // create.pet('Garfield', '2017-07-23', 'Katt', 'Bondkatt', 1);
    // create.pet('Nils', '2013-07-23', 'Hund', 'Boxer', 6);
    // create.pet('Socker', '2013-07-23', 'Hund', 'Boxer', 5);

        create.feedingbowl('red', 'plastic', 3, 3);
        create.feedingbowl('blue', 'plastic', 3, 1);
        create.feedingbowl('yellow', 'metal', 1, 2);
        create.feedingbowl('red', 'keramic', 0.2, 3);



}

// function feedingbowl() {
//     create.feedingbowl('red', 'plastic', 3, 3);
//     create.feedingbowl('blue', 'plastic', 3, 1);
//     create.feedingbowl('yellow', 'metal', 1, 2);
//     create.feedingbowl('red', 'keramic', 0.2, 3);
// }

module.exports = {
    fillDb: fillDb
}
