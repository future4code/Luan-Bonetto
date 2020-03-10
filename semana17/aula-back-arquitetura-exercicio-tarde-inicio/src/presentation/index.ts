import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsersEndpoint } from "./endpoints/getAllUsers";
import { editUser } from "./endpoints/editUser";

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);

app.get("/user", getUserByEmail);

app.get("/user/all", getAllUsersEndpoint)

app.put("/user/edit", editUser)

export default app;
