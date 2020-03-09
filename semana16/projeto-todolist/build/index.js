"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'luan',
        password: '%HLa7uF@ioyi2O9yI!UU',
        database: 'bouman-luan'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/criarUsuario': 'cria um novo usuario',
            '/editarUsuario/:idUsuario': 'edita um usuário de acordo com seu id'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
app.post('/criarUsuario', (req, res) => {
    const nonQuery = connection.insert(req.body).into("usuarios");
    nonQuery.then((result) => {
        res.send(`O usuario ${req.body.nome} foi criado`);
    }).catch((err) => {
        res.send(err);
    });
});
app.put('/editarUsuario/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;
    const nonQuery = connection("usuarios").update(req.body).where("id", "=", idUsuario);
    nonQuery.then((result) => {
        res.send(`O apelido do usuário foi alterado com sucesso`);
    }).catch((err) => {
        res.send(err);
    });
});
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
