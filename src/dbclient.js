import {MongoClient} from "mongodb";

for (let key of ['MONGO_HOST','MONGO_SCHEME','MONGO_DB','MONGO_USER','MONGO_PASS'])
  if (!process.env[key])
    throw new Error(`La variable de ambiente ${key} debe configurarse`);

const {
  MONGO_HOST,
  MONGO_SCHEME,
  MONGO_DB,
  MONGO_USER,
  MONGO_PASS
} = process.env;

const client = new MongoClient(`${MONGO_SCHEME}://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}`);
export default client;

