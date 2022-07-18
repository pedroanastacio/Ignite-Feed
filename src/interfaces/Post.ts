import { IAuthor } from "./Author"
import { IContent } from "./Content"

export interface IPost {
    id: number
    author: IAuthor
    content: IContent[]
    publishedAt: Date
}