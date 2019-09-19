import { UseCase } from "../../base";
import { BoardData } from "../../domain";
import { ILikedBoardRepository, IBoardsRepository } from "../../contracts/repository";

export class AddLikedNoteUseCase implements UseCase<BoardData,boolean> {
    
    repository: IBoardsRepository;

    constructor(repo: IBoardsRepository) {
        this.repository = repo;
    }
    
    execute(params: BoardData): Promise<boolean> {
        console.log('Use Case - Add New Liked Note');
        return this.repository.addNewLikedNote(params);
    }

}