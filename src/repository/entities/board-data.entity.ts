import { ReactionEntity } from "./reaction.entity";

export interface BoardDataEntity {
    _id: string | null;
    userId: string;
    text: string;
    reaction: Array<ReactionEntity>;
}