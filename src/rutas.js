import server from "./server.js";

import GET_filtered       from "./endpoints/GET_filtered.js";
import POST               from "./endpoints/POST.js";
import getMedicionesTipos from "./endpoints/getMedicionesTipos.js";

server.get("/mediciones", GET_filtered);
server.post("/mediciones", POST);
server.get("/mediciones/tipos",getMedicionesTipos);

