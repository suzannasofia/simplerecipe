import { Client } from 'pg';
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

async function query(sqlQuery, values) {

    console.log("connecting...");
    const client = new Client({ connectionString });
    await client.connect();

    let result;

    try {
      result = await client.query(sqlQuery, values);
    } catch (err) {
      throw err;
    } finally {
      await client.end();
    }

    return result;
}

export default query;
