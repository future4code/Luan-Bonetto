import { UserGateway } from "../../gateways/userGateway";

export class NewFriendshipUC {
    constructor(private db:UserGateway){}

    public async execute(input:NewFriendshipInput): Promise<NewFriendshipOutput> {

        await this.db.createFriendship(input.userId, input.friendId)
        await this.db.createFriendship(input.friendId, input.userId)

        return { message: "user successfully followed" }
    }
}

export interface NewFriendshipInput {
    userId: string
    friendId: string
}

export interface NewFriendshipOutput {
    message: string
}