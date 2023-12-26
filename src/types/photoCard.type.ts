import { IComment } from "./comment.type";

export interface IPhoto {
    id: string;
    image: string;
    comments: IComment[];
}