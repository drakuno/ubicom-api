import server    from "./server.js";
import holaMundo from "./endpoints/holamundo.js";
import testMongo from "./endpoints/testmongo.js";

server.get("/",holaMundo);
server.get("/testMongo",testMongo);

