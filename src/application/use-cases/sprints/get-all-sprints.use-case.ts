import { UseCase } from "../../base";
import { Sprint } from "../../domain";
import { ISprintRepository } from "../../contracts/repository";

export class GetAllSprintsUseCase implements UseCase<void, Array<Sprint>> {
    repo: ISprintRepository;

    constructor(repo: ISprintRepository) {
        this.repo = repo;
    }

    async execute(params: void): Promise<Array<Sprint>> {
        return this.repo.getAllSprints();
    }

}