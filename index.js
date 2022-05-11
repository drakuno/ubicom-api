import server from "./src/server.js";
import "./src/rutas.js";

const PORT = process.env.API_PORT ?? 3000;

server.listen(PORT,function(){ console.log(`Servidor iniciado en puerto ${PORT}`); });

