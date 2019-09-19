import { BoardData } from "../../domain";

export interface ILikedBoardRepository {
    addNewLikedNote(boardData: BoardData): Promise<boolean>;
    getLikedBoardNoteList(sprintId: string): Promise<Array<BoardData>>;
    updateLikedBoardNote(boardData: BoardData): Promise<boolean>;
    deleteLikedBoardNote(id: string): Promise<boolean>;
}