import { Repository } from "../../repository/repository";
import { Boards, BoardData } from "../../application/domain";
import { GetSprintBoardUseCase } from "../../application/use-cases/get-sprint-board/get-sprint-board.use-case";
import { AddLikedNoteUseCase } from "../../application/use-cases/add-note/add-liked-note.use-case";

export class BoardsController {
    async getBoardsData(id: string): Promise<Boards> {
        const repo = Repository.getInstance();
        const useCase = new GetSprintBoardUseCase(repo);
        const data = useCase.execute(id);
        return data;
    }

    async addNewLikeNote(input: BoardData): Promise<boolean> {
        console.log('Add New Like -Boards Controller');
        const repo = Repository.getInstance();
        const useCase = new AddLikedNoteUseCase(repo);
        const data = useCase.execute(input);
        return data;
    }
}