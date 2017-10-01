const create = require('./create-stuff.js');

function fillDb() {
    create.pet('Harry', '2014-01-23', 'Katt', 'Vanlig', 3);
    create.pet('Bosse', '1999-07-23', 'Ko', 'Vanlig', 2);
    create.pet('Garfield', '2017-07-23', 'Katt', 'Bondkatt', 1);
    create.pet('Nils', '2013-07-23', 'Hund', 'Boxer', 6);
    create.pet('Socker', '2013-07-23', 'Hund', 'Boxer', 5);
}

module.exports = {
    fillDb: fillDb
}
