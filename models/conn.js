'use strict'

const options = {
    host: 'localhost',
    database: 'studentsurvey'
}



const pgp = require('pg-promise')({
    query: function(e) {
    console.log('QUERY', e.query);
    }
});

const db = pgp(options);


module.exports = db;