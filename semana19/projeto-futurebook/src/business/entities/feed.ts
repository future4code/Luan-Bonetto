export class Feed {
    constructor(
        private id:string,
        private picture:string,
        private description:string,
        private postDate:number,
        private postType:PostType,
        private userId:string
    ){}

    getId():string {
        return this.id
    }

    getPicture():string {
        return this.picture
    }

    getDescription():string {
        return this.description
    }

    getPostDate():number {
        return this.postDate
    }

    getPostType():PostType {
        return this.postType
    }

    getUserId():string {
        return this.userId
    }
}

export enum PostType {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}