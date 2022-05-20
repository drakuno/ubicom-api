import dbclient from "../dbclient.js";
export default async function(req,res)
{

  await dbclient.connect();
  var date  = new Date(req.body.datetime);
  var valor = req.body.valores;

  var date2 = isNaN(date)?new Date():date;
  const db                   = dbclient.db(),
        medicionesCollection = db.collection("mediciones"),
        doc                  = { datetime: date2, valores: valor };
  await medicionesCollection.insertOne(doc);
  res.send();
  //res.send(console.log(date));
  //medicionesCollection.deleteOne({"_id": ObjectId("62867af6360af2fb1a2dd36f")});
  //res.send("Se cargo con exito");
}
