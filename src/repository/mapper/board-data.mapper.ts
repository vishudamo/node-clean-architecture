import { Mapper } from "../../application/base";
import { BoardData, Reactions } from "../../application/domain";
import { ReactionEntity } from "../entities/reaction.entity";
import { BoardDataEntity } from "../entities/board-data.entity";

export class BoardDataMapper extends Mapper<BoardData, BoardDataEntity> {
    reactionMapper: Mapper<Reactions, ReactionEntity>;

    constructor(reactionMapper: Mapper<Reactions, ReactionEntity>) {
        super();
        this.reactionMapper = reactionMapper;
    }
    
    mapFrom(param: BoardData): BoardDataEntity {
        return {
            _id: null,
            userId: param.userId,
            text: param.text,
            reaction: param.reaction.map(r => this.reactionMapper.mapFrom(r))
        }
    }    

    mapTo(param: BoardDataEntity): BoardData {
        return {
            userId: param.userId,
            text: param.text,
            reaction: param.reaction.map(r => this.reactionMapper.mapTo(r))
        }
    }
}