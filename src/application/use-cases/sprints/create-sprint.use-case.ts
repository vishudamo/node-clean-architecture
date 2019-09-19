import { UseCase } from "../../base";
import { Sprint } from "../../domain";
import { ISprintRepository } from "../../contracts/repository";

export class CreateSprintUseCase implements UseCase<Sprint, boolean> {
    repository: ISprintRepository;

    constructor(repository: ISprintRepository) {
        this.repository = repository;
    }
    
    async execute(params: Sprint): Promise<boolean> {
        return this.repository.createSprint(params);
    }
}