import dbclient from "../dbclient.js";

export default async function getMedicionesTipos()
{
  const [,res] = arguments;

  await dbclient.connect();

  const
    db    = dbclient.db(),
    tipos = await db.collection("mediciones").aggregate(
    [
      {"$project":{"valoresToArray":{"$objectToArray":"$valores"}}},
      {"$unwind":{"path":"$valoresToArray"}},
      {"$match":{"valoresToArray.v":{"$ne":null}}},
      {"$group":{
        "_id"      : "$valoresToArray.k",
        "cantidad" : {"$count":{}},
      }},
      {"$group":{
        "_id" : null,
        "tiposCantidadesEntries" : {"$push":{"k":"$_id","v":"$cantidad"}},
      }},
      {"$project":{"tiposCantidades":{"$arrayToObject":"$tiposCantidadesEntries"}}},
      {"$replaceRoot":{"newRoot":"$tiposCantidades"}},
    ]).toArray();
  ;

  res.send(tipos[0]??{});
}

