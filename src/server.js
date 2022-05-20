import express from "express";
import cors    from "cors";

// el objeto app es el servidor
const server = express();
export default server;
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors());
server.use(express.json());

