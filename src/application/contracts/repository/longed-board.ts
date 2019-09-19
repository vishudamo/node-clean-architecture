import { BoardData } from "../../domain";

export interface ILongedBoardRepository {
    addNewLongedNote(boardData: BoardData): Promise<boolean>;
    getLongedBoardNoteList(sprintId: string): Promise<Array<BoardData>>;
    updateLongedBoardNote(boardData: BoardData): Promise<boolean>;
    deleteLongedBoardNote(id: string): Promise<boolean>;
}