const { Pool } = require('pg')

const PG_URI = "postgres://eukzsvtx:9pAyJ6uEOVQPpLpTTyXKjombp5UmtuCw@kashin.db.elephantsql.com/eukzsvtx"

//create a new pool
const pool = new Pool({
    connectionString: PG_URI,
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};