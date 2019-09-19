import { BoardData } from "../../domain";

export interface ILearnedBoardRepository {
    addNewLearnedNote(boardData: BoardData): Promise<boolean>;
    getLearnedBoardNoteList(sprintId: string): Promise<Array<BoardData>>;
    updateLearnedBoardNote(boardData: BoardData): Promise<boolean>;
    deleteLearnedBoardNote(id: string): Promise<boolean>;
}