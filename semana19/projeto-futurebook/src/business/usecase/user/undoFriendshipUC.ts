import { UserGateway } from "../../gateways/userGateway";

export class UndoFriendshipUC {
    constructor(private db:UserGateway){}

    public async execute(input:UndoFriendshipInput): Promise<UndoFriendshipOutput>{

        this.db.undoFriendship(input.userId, input.friendId)
        this.db.undoFriendship(input.friendId, input.userId)

        return { message: "friendship successfully broken" }
    }
}

export interface UndoFriendshipInput {
    userId: string,
    friendId: string
}

export interface UndoFriendshipOutput {
    message: string
}