import { Sprint } from "../../domain";

export interface ISprintRepository {
    getAllSprints(): Promise<Array<Sprint>>;
    createSprint(params: Sprint): Promise<boolean>;
}