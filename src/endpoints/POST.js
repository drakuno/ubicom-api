import dbclient from "../dbclient.js";
import express from "express";
import { ObjectId } from "mongodb";
export default async function(req,res)
{

  await dbclient.connect();
  var date = req.body.datetime;
  var valor = req.body.valores;

  var today = new Date();
  var iso =today.toISOString();
  const db                   = dbclient.db(),
        medicionesCollection = db.collection("mediciones"),
        doc                  = { datetime: date, valores: valor };
  //const cargar = await medicionesCollection.insertOne(doc);
  res.send(await medicionesCollection.find().toArray());
  //res.send(console.log(date));
  //medicionesCollection.deleteOne({"_id": ObjectId("62867af6360af2fb1a2dd36f")});
  //res.send("Se cargo con exito");
}