import server    from "./server.js";
import holaMundo from "./endpoints/holamundo.js";

server.get("/",holaMundo);

