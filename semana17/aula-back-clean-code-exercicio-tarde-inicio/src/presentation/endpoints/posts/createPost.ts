import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecase/posts/createPost";
import { PostDB } from "../../../data/postDataBase";

export const createPostEndpoint = async (req: Request, res: Response) => {
  try {
    const createPostUC = new CreatePostUC(new PostDB());
    const result = await createPostUC.execute({
      title: req.body.title,
      content: req.body.content,
      type: req.body.type,
      userId: req.body.userId,
      image: req.body.image
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};

/*
  1) Post de evento e post normal eles são apresentados através de uma interface.

  2) Ele verifica se o post é do tipo normal ou evento, se não for nenhum dos dois
  ele retorna um erro de parametro invalido.

  3) Pois ela é unica, transforma-la em classe abstrata faz com que as suas propriedades
  não sofram alterações em outros lugares do código.

  4) Cria uma variável relacionada a classe do post em que vai ser enviado os dados para
  o banco de dados.

  5) Pra que os dados sejam organizados em um objeto, pra ser tratado com mais facilidade no código.

  6) Vem do body no momento que é criado um novo post.

  7) Vem da função execute na createPostUC

  8) Para dar a condição na hora de criar o post caso tiver imagem e caso não tiver imagem
*/