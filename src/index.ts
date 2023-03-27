import express,{Request,Response,NextFunction} from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
const app = express();

//  Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//configuração das rotas
app.use(usersRoute);
app.use(statusRoute);
app.get('/status',(req:Request, res:Response, next:NextFunction)=>{
    res.status(200).send({for:'sucesso'});
});
//inicialização do servidor 
app.listen(3000, ()=>{
    console.log('Aplicação executando na porta 3000');
});