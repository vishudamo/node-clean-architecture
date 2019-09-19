import { UseCase } from "../../base";
import { BoardData } from "../../domain";
import { ILackedBoardRepository } from "../../contracts/repository";

export class AddLackedNoteUsecase implements UseCase<BoardData, boolean> {
    
    repository: ILackedBoardRepository;

    constructor(repo: ILackedBoardRepository) {
        this.repository = repo;
    }
    
    execute(params: BoardData): Promise<boolean> {
        return this.repository.addNewLackedNote(params);
    }

}