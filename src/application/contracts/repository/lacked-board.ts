import { BoardData } from "../../domain";

export interface ILackedBoardRepository {
    addNewLackedNote(boardData: BoardData): Promise<boolean>;
    getLackedBoardNoteList(sprintId: string): Promise<Array<BoardData>>;
    updateLackedBoardNote(boardData: BoardData): Promise<boolean>;
    deleteLackedBoardNote(id: string): Promise<boolean>;
}