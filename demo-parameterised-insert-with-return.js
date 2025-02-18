const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();

  const text =
    "INSERT INTO artists(name, fav_song, id) VALUES($1, $2, $3) RETURNING *";
  const values = ['Jelly B Birthmark Beaute', 'El Roi', 8];

  const res = await client.query(text, values);

  //The returning clause causes the newly created row to be returned
  //including, for example, any auto-assigned ID.
  console.log(res.rows[0]);

  await client.end();
}

doDemo();
