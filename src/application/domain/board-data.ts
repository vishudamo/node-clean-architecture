import { Reactions } from "./reactions";

export interface BoardData {
    userId: string;
    text: string;
    reaction: Array<Reactions>;
}