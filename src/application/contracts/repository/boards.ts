import { ILikedBoardRepository } from "./liked-board";
import { ILackedBoardRepository } from "./lacked-board";
import { ILearnedBoardRepository } from "./learned-board";
import { ILongedBoardRepository } from "./longed-board";

export interface IBoardsRepository extends ILikedBoardRepository, ILackedBoardRepository, ILearnedBoardRepository, ILongedBoardRepository {}