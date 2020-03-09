import express, { Request, Response, request } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'luan',
    password : '%HLa7uF@ioyi2O9yI!UU',
    database : 'bouman-luan'
  }
});

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/criarUsuario': 'cria um novo usuario',
      '/editarUsuario/:idUsuario': 'edita um usuário de acordo com seu id',
      '/deletarUsuario/:idUsuario': 'deleta um usuário de acordo com seu id',
      '/getUsuario/:idUsuarioOUapelidoUsuario': 'Pega um usuário pelo id ou apelido',
      '/getUsuarios/': 'Pega todos os usuarios, é possivel filtrar por idade ou ordenar pelos nomes',
      '/criarTarefa/': 'Cria uma tarefa passando o id do pedinte, não é obrigatorio passar o usuario responsavel',
      '/editarTarefa/:id': 'Edita descrição e a data limite de uma tarefa passando o id da mesma'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});


app.post('/criarUsuario', (req: Request, res: Response) => {
  
  const nonQuery = connection.insert(req.body).into("usuarios")

  nonQuery.then((result) => {
    res.send(`O usuario ${req.body.nome} foi criado`)
  }).catch((err) => {
    res.send(err)
  })

})

app.put('/editarUsuario/:idUsuario', (req: Request, res: Response) => {

  const idUsuario = req.params.idUsuario

  const query = connection("usuarios").update(req.body).where("id", "=", idUsuario)

  query.then((result)=> {
    res.send(`O apelido do usuário foi alterado com sucesso`)
  }).catch((err) => {
    res.send(err)
  })

})

app.delete('/deletarUsuario/:idUsuario', (req: Request, res: Response) => {

  const idUsuario = req.params.idUsuario

  const query = connection("usuarios").where("id", "=", idUsuario).del()

  query.then((result)=> {
    res.send(`O usuário foi deletado com sucesso`)
  }).catch((err) => {
    res.send(err)
  })

})

app.get('/getUsuario/:idUsuarioOUapelidoUsuario', (req: Request, res: Response) => {

  const info = req.params.idUsuarioOUapelidoUsuario

  const query = connection.select().from("usuarios").where("id", "=", info).orWhere("apelido", "=", info)

  query.then((result)=> {
    res.send(result)
  }).catch((err) => {
    res.send(err)
  })
})

app.get('/getUsuarios/', (req: Request, res: Response) => {
  const ordem:string = req.query.ordem
  const idade:number = Number(req.query.idade)

  let query = connection.select().from('usuarios')

  if(idade) {
    query.whereRaw(`floor(datediff(curdate(), data_nascimento)/365) = ${idade}`)
  } else if (ordem){
    query.orderBy('nome', ordem)
  }

  query.then((result) => {
    res.send(result)
  }).catch((err) => {
    res.send(err)
  })
})

app.post('/criarTarefa/', (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('tarefas')

  nonQuery.then((result) => {
    res.send("Nova tarefa criada.")
  }).catch((err) => {
    res.send(err)
  })
});

app.put('/editarTarefa/:id', (req: Request, res: Response) => {
  const tarefaId = req.params.id
  const novaDesc = req.body.descricao
  const novaData = req.body.data_limite

  const builder = connection('tarefas')
  .where('id', '=', tarefaId)
  .update({
    descricao: novaDesc,
    data_limite: novaData
  })

  builder.then((result) => {
    res.send("A tarefa foi atualizada.")
  }).catch((err) => {
    res.send(err)
  })
});

const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});