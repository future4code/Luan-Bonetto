import { NormalPostCreator } from "./normalPostCreator";
import { UserPost } from "./userPost";
import { ErrorPrinter } from "./errorPrinter";

// const luanPost = new NormalPostCreator("Luan", "Bananinha")
// luanPost.create()

const luanPost = new NormalPostCreator()
luanPost.create("Luan", "")