const pm = require('promisemaker');
const mysql = require('mysql');

module.exports = class RestSql {

    static start(settings) {
        this.dbSettings = settings;
        // console.log(settings);
        this.connectToDb();

        // return a new Class for the middleware to be initialized
        return (...args) => new RestSql(...args);
    }

    static connectToDb() {
        // Using Promisemake to make a connection to the database
        const db = pm(
            mysql.createConnection(this.dbSettings.sqlSettings), {
                rejectOnErrors: this.dbSettings.rejectOnErrors,
                mapArgsToProps: {
                    query: ["rows", "fields"]
                }
            }
        );
        // console.log(this.dbSettings);
    }

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.settings = RestSql.dbSettings;
        this.analyzeUrl();
    }

    analyzeUrl() {
        let host = this.settings.sqlSettings.hostUrl;
        let url = this.req.url;
        let baseUrl = this.settings.baseUrl.toLowerCase();
        let s = host + baseUrl + url;

        if(url.indexOf(baseUrl) != 0){
          console.log('This Url does not contain the baseUrl of "' + baseUrl + '"');
          this.next();
          return;
        }

        url = '/rest/animals/2';
        let urlParts = url.split('/');

        this.table = urlParts[2];
        this.id = urlParts[3];

        console.log(this.table, this.id);
    }

    sqlParts(url) {
        let currentUrl = url;
        let urlParts = currentUrl.split();
        // let method = this.req.method.toLowerCase();

        // let table =
        console.log(currentUrl);
    }

    // Helper func to make query syntax shorter
    // async query(query,params){
    //   let result = await db.query(query,params);
    //   return result.rows;
    // }
}
