import dbclient from "../dbclient.js";

export default async function()
{
  const [,res] = arguments;

  await dbclient.connect();

  const db                   = dbclient.db(),
        medicionesCollection = db.collection("mediciones");

  res.send(await medicionesCollection.find().toArray());
}

