import { serverHttp } from "./app";

serverHttp.listen(4000, ()=> 
console.log("o servidor está rodando na porta 4000")
);