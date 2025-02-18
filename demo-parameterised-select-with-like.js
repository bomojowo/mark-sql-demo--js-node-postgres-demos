const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();

  const searchTerm = "b";

  const text = "select * from artists where name ilike $1 ";
  
  const values = [`%${searchTerm}%`];

  const res = await client.query(text, values);
  console.log(res.rows);
  await client.end();
}

doDemo();
