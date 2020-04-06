import { BaseDB } from "./baseDataBase";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";

export class UserDB extends BaseDB implements UserGateway {
    private usersTableName = "users_futurebook"
    private friendsListTableName = "friends_list"

    public async createUser(user: User): Promise<void> {

        await this.connection.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into(this.usersTableName)

    }

    public async getUserByEmail(email: string): Promise<User | undefined> {

        const user = await this.connection.select('*')
            .from(this.usersTableName)
            .where({ email })


        if (!user[0]) {
            return undefined
        }

        return new User(
            user[0].id,
            user[0].name,
            user[0].email,
            user[0].password
        )
    }

    public async createFriendship(userId: string, friendId: string): Promise<void> {

        await this.connection.insert({
            userId,
            friendId
        }).into(this.friendsListTableName)

    }

    public async undoFriendship(userId: string, friendId: string): Promise<void> {

        await this.connection(this.friendsListTableName)
            .where({
                userId,
                friendId
            }).del()

    }

}
