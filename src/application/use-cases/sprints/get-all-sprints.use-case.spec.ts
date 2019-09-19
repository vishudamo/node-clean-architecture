import {GetAllSprintsUseCase} from './get-all-sprints.use-case';
import { ISprintRepository } from '../../contracts/repository';

const testData = [{
    _id: null,
    sprintNo: 1,
    status: false
}];

const Mock = jest.fn<ISprintRepository, []>(() => ({
    createSprint: jest.fn(),
    getAllSprints: jest.fn().mockResolvedValue(testData)
}));

describe('Get all sprints Use Case', () => {

    let mock: ISprintRepository;
    let testUseCase: GetAllSprintsUseCase;

    beforeEach(() => {
        mock = new Mock();
        testUseCase = new GetAllSprintsUseCase(mock);
    });

    afterEach(() => {
        Mock.mockClear();
    });

    test('Should call sprint repo getAllSprints method once', () => {
        const data = testUseCase.execute();
        expect(mock.getAllSprints).toHaveBeenCalledTimes(1);
        
    });

    test('Should return testData after execute method call', () => {
        const data = testUseCase.execute();
        return expect(data).resolves.toEqual(testData);
    });
});