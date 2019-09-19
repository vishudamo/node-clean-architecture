import { Repository } from "../../repository/repository";
import { Sprint } from "../../application/domain";
import { CreateSprintUseCase } from "../../application/use-cases/sprints/create-sprint.use-case";
import { GetAllSprintsUseCase } from "../../application/use-cases/sprints/get-all-sprints.use-case";

export class SprintController {
    async createSprint(sprint: Sprint): Promise<boolean> {
        const repo = Repository.getInstance();
        const useCase = new CreateSprintUseCase(repo);
        const data = useCase.execute(sprint);
        return data;
    }

    async getAllSprints(): Promise<Array<Sprint>> {
        const repo = Repository.getInstance();
        const useCase = new GetAllSprintsUseCase(repo);
        const data = useCase.execute();
        return data;
    }
}