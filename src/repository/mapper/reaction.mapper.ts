import { Mapper } from "../../application/base";
import { Reactions } from "../../application/domain";
import { ReactionEntity } from "../entities/reaction.entity";

export class ReactionMapper extends Mapper<Reactions, ReactionEntity> {
    
    mapFrom(param: Reactions): ReactionEntity {
        return {
            _id: null,
            userId: param.userId,
            like: param.like,
            dislike: param.dislike,
            informative: param.informative,
            confused: param.confused,
            applause: param.applause
        }
    }    

    mapTo(param: ReactionEntity): Reactions {
        return {
            userId: param.userId,
            like: param.like,
            dislike: param.dislike,
            informative: param.informative,
            confused: param.confused,
            applause: param.applause
        }
    }


}