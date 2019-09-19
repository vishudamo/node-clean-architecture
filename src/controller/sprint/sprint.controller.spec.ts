import { SprintController } from './sprint.controller';
import { CreateSprintUseCase, GetAllSprintsUseCase } from '../../application/use-cases';
import { Sprint } from '../../application/domain';
import { Repository } from '../../repository/repository';

jest.mock('../../application/use-cases/sprints/create-sprint.use-case');
jest.mock('../../application/use-cases/sprints/get-all-sprints.use-case');
jest.mock('../../repository/repository');

describe('Sprint Controller - Create Sprint', () => {
    let controller: SprintController;
    let testData: Sprint;

    beforeEach(() => {
       
        testData = {
            sprintNo: 1,
            status: false,
            creation_date: null
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should get Repository instance when createSprint method called', () => {
        controller = new SprintController();
        const result = controller.createSprint(testData);
        expect(Repository.getInstance).toHaveBeenCalledTimes(1);
    });

    test('Should invoke once CreateSprintUseCase when createSprint method called', () => {
        controller = new SprintController();
        const result = controller.createSprint(testData);
        expect(CreateSprintUseCase).toHaveBeenCalledTimes(1);
    });

    test('Should call execute method once from the CreateSprintUseCase', () => {
        const spy = jest.spyOn(CreateSprintUseCase.prototype, 'execute');
        controller = new SprintController();
        const result = controller.createSprint(testData);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

describe('Sprint Controller - getAllSprints', () => {
    let controller: SprintController;

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should get Repository instance when getAllSprint method called', () => {
        controller = new SprintController();
        const result = controller.getAllSprints();
        expect(GetAllSprintsUseCase).toHaveBeenCalledTimes(1);
    });

    test('Should invoke once GetAllSprintUseCase when getAllSprints method called', () => {
        controller = new SprintController();
        controller.getAllSprints();
        expect(GetAllSprintsUseCase).toHaveBeenCalledTimes(1);
    });

    test('Should call execute method once from the GetAllSprintUseCase', () => {
        const spy = jest.spyOn(GetAllSprintsUseCase.prototype, 'execute');
        controller = new SprintController();
        controller.getAllSprints();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});