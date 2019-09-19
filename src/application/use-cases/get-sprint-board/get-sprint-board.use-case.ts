import { UseCase } from "../../base";
import { Boards } from "../../domain";
import { ILackedBoardRepository, ILearnedBoardRepository, ILongedBoardRepository, ILikedBoardRepository, IBoardsRepository } from "../../contracts/repository";

export class GetSprintBoardUseCase implements UseCase<string, Boards> {
    repository: IBoardsRepository

    constructor(repo: IBoardsRepository) {
        this.repository = repo;
    }

    async execute(params: string): Promise<Boards> {
        const likedBoard = await this.repository.getLikedBoardNoteList(params);
        const lackedBoard = await this.repository.getLackedBoardNoteList(params);
        const learnedBoard = await this.repository.getLearnedBoardNoteList(params);
        const longedBoard = await this.repository.getLongedBoardNoteList(params);

        const result: Boards = {
            sprintId: params,
            likedBoard,
            lackedBoard,
            learnedBoard,
            longedBoard
        };

        return new Promise((resolve) => resolve(result));
    }

}