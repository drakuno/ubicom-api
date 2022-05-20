import express from "express";

// el objeto app es el servidor
const server = express();
export default server;
server.use(
    express.urlencoded({
      extended: true,
    })
  );
server.use(express.json());