import { BaseDB } from "./baseDataBase";
import { FeedGateway } from "../business/gateways/feedGateway";
import { Feed } from "../business/entities/feed";

export class FeedDB extends BaseDB implements FeedGateway {

    private postsTableName = "posts_futurebook"

    public async createPost(post:Feed): Promise<void> {

        await this.connection.insert({
            id: post.getId(),
            picture: post.getPicture(),
            description: post.getDescription(),
            postDate: post.getPostDate(),
            postType: post.getPostType(),
            userId: post.getUserId()
        }).into(this.postsTableName)

    }

}