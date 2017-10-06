const pm = require('promisemaker');
const mysql = require('mysql');

module.exports = class RestSql {

    static start(settings) {
        this.dbSettings = settings;
        this.connectToDb();

        // return a new Class for the middleware to be initialized
        return (...args) => new RestSql(...args);
    }

    static connectToDb() {
        // Using Promisemake to make a connection to the database
        this.db = pm(
            mysql.createConnection(this.dbSettings.sqlSettings), {
                rejectOnErrors: this.dbSettings.rejectOnErrors,
                mapArgsToProps: {
                    query: ["rows", "fields"]
                }
            }
        );
        this.getInfo();

    }

    static async getInfo() {
        let a = [];
        let tables = await RestSql.db.query('show tables');
        tables = tables.rows;
        tables.map((table) => {
            for (let key in table) {
                a.push(table[key]);
            }
        });
        console.log("Current tables in database '" + RestSql.dbSettings.sqlSettings.database + "':");
        console.log(a.join(', '));
        this.tableinfo = a;
        return a;
    }

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.settings = RestSql.dbSettings;
        this.analyzeUrl();

        // find which CRUD method based on the URL req
        if (['get', 'post', 'put', 'delete'].includes(this.method)) {
            this[this.method]();
        }
    }


    // Helper func to make query syntax shorter
    async query(query, params) {
        let result = await RestSql.db.query(query, params);
        return result.rows;
    }

    analyzeUrl() {
        let host = this.settings.sqlSettings.hostUrl;
        let url = this.req.url;
        let baseUrl = this.settings.baseUrl.toLowerCase();
        let s = host + baseUrl + url;

        if (url.indexOf(baseUrl) != 0) {
            console.log('This Url does not contain the baseUrl of "' + baseUrl + '"');
            this.next();
            return;
        }

        let urlParts = url.split('/');

        this.table = urlParts[2];
        this.id = urlParts[3];
        this.method = this.req.method.toLowerCase();
        this.idName = this.settings.specialIDs[this.table] || 'id';
    }

    async get() {

        let r = await this.query('SELECT * FROM `' + this.table + '`' +
            (this.id ? ' WHERE ' + this.idName + ' = ?' : ''), [this.id]);

        // If we get an error from MySQL
        if (r.constructor === Error) {
            this.res.status(500);
        }

        // Error no post with a certain id
        else if (this.id && r.length === 0) {
            this.res.status(500);
            this.res.json({
                Error: 'No post'
            });
            return;
        }

        // Convert id query from array to object
        else if (this.id) {
            r = r[0];
        }
        this.res.json(r);
    }

}
