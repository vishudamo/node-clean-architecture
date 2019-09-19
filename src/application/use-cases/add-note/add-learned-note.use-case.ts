import { UseCase } from "../../base";
import { BoardData } from "../../domain";
import { ILearnedBoardRepository } from "../../contracts/repository";

export class AddLearnedNoteUseCase implements UseCase<BoardData, boolean> {
    
    repository: ILearnedBoardRepository;

    constructor(repo: ILearnedBoardRepository) {
        this.repository = repo;
    }
    
    execute(params: BoardData): Promise<boolean> {
        return this.repository.addNewLearnedNote(params);
    }

}