import { Feed } from "../entities/feed";

export interface FeedGateway {
    createPost(post:Feed): Promise<void>
}