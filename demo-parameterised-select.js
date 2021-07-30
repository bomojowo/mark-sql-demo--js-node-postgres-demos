const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();

  const text = "select * from artists where id = $1 or id = $2";
  const values = [1, 3];

  const res = await client.query(text, values);
  console.log(res.rows);
  await client.end();
}

doDemo();
