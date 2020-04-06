import { FeedGateway } from "../../gateways/feedGateway";
import { PostType, Feed } from "../../entities/feed";
import { v4 } from 'uuid';

export class CreatePostUC {
    constructor(private db: FeedGateway) { }

    public async execute(input: CreatePostInput): Promise<CreatePostOutput> { 

        const postId = v4()

        const newPost = new Feed(
            postId,
            input.picture,
            input.description,
            input.postDate,
            input.postType,
            input.userId
        )

        this.db.createPost(newPost)

        return { message: "Post created successfully" }
    }
}

export interface CreatePostInput {
    picture: string,
    description: string,
    postDate: number,
    postType: PostType,
    userId: string
}

export interface CreatePostOutput {
    message: string
}