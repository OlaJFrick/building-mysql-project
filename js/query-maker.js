const pm = require('promisemaker'),
    mysql = require('mysql');

const db = pm(
    mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "popo",
        database: "animalregister"
    }), {
        rejectOnErrors: false,
        mapArgsToProps: {
            query: ["rows", "fields"]
        }
    }
);

async function query(query, params) {
    let r = await db.query(query, params);
    return r.rows;
};

async function dbEnd() {
    return await db.end();
}

module.exports = {
    query: query,
    dbEnd: dbEnd
}
