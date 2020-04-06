import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/user/signup";
import { loginEndpoint } from "./endpoints/user/login";
import { newFriendshipEndpoint } from "./endpoints/user/newFriendship";
import { undoFriendshipEndpoint } from "./endpoints/user/undoFriendship";
import { createPostEndpoint } from "./endpoints/feed/createPost";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
        }
    };
    res.send(resposta)
});

app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint)
app.post("/user/friendship", newFriendshipEndpoint)
app.delete("/user/friendship", undoFriendshipEndpoint)
app.post("/feed/post", createPostEndpoint)

export default app;