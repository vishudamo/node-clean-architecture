import { UseCase } from "../../base";
import { BoardData } from "../../domain";
import { ILongedBoardRepository } from "../../contracts/repository";

export  class AddLongedNoteUsecase implements UseCase<BoardData, boolean> {
    
    repository: ILongedBoardRepository;

    constructor(repo: ILongedBoardRepository) {
        this.repository = repo;
    }
    
    execute(params: BoardData): Promise<boolean> {
        return this.repository.addNewLongedNote(params);
    }

}