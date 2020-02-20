import { PostCreator } from "./postCreator"
import { FileManager } from "./JSONFileManager"
import { UserPost } from "./userPost"
import { ErrorPrinter } from "./errorPrinter"

export class NormalPostCreator implements PostCreator {
    private fileManager: FileManager
    private errorPrinter: ErrorPrinter
    autor: string
    text: string

    constructor() {
        this.fileManager = new FileManager('database.json')
    }

    create(autor: string, text: string): void {
        if (!autor || !text) {
            this.errorPrinter.printError("msg de erro", new Date)
        }else{
            let newPost = new UserPost(autor, text, new Date)
            this.fileManager.writeFile(newPost)
        }
    }
}