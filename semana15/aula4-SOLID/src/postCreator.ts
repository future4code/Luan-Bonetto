
export interface PostCreator {

    autor:string
    text:string

    create(autor:string, text:string):void
}