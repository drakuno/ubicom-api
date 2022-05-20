import server    from "./server.js";
import test from "./endpoints/testmongo.js";
import POST from "./endpoints/POST.js";
import GET_filtered from "./endpoints/GET_filtered.js";

server.post("/mediciones", POST);
server.get("/mediciones", GET_filtered);
