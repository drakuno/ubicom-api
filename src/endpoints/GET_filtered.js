import dbclient from "../dbclient.js";
import { ObjectId } from "mongodb";

export default async function(req, res)
{

  await dbclient.connect();
  var db                     = dbclient.db(),
        medicionesCollection = db.collection("mediciones"),
        fecha_ini            = req.query.fecha_inicio,
        fecha_fin            = req.query.fecha_finalizacion,
        tipos                = req.query.tipo,
        promedio             = req.query.promediar,
        filtro               = {},
        objeto               = {"_id": null, "count": {$count:{}}};
  
  if (tipos != null){
    if (typeof tipos == "string"){
      tipos = [tipos];
    }
    for (let tipo of tipos){
      filtro[`valores.${tipo}`] = { "$exists" : true },
      objeto[`promedio${tipo}`] = {"$avg":`$valores.${tipo}`};
      }
  }
  if (fecha_ini != null){
    filtro['datetime' ] = { $gt: fecha_ini}
  }
  if (fecha_fin != null){
    filtro['datetime' ] = Object.assign({ $lt: fecha_fin}, filtro.datetime)
  }
  if (promedio == null){
    res.send( await medicionesCollection.find(filtro).toArray() );
  }else
    res.send( await medicionesCollection.aggregate([{"$match":filtro},{"$group":objeto}]).toArray());
  

  
  //const cargar = await medicionesCollection.insertOne(doc);
  //medicionesCollection.deleteOne({"_id": ObjectId("6281aebcb0ed4d75daa051f8")})
  //res.status(200).send(await doc);
  //res.send(await medicionesCollection.find().toArray());
  //res.send(await fecha_ini);
}
