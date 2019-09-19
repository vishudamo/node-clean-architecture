import { CreateSprintUseCase } from './create-sprint.use-case';
import { ISprintRepository } from '../../contracts/repository';
import { Sprint } from '../../domain';

const testData: Sprint = {
    sprintNo: 1,
    status: false,
    creation_date: null
};

const testReturnValue = true;

const Mock = jest.fn<ISprintRepository, []>(() => ({
    createSprint: jest.fn().mockResolvedValue(testReturnValue),
    getAllSprints: jest.fn()
}));

describe('create sprint use case', () => {
    let mock: ISprintRepository;
    let testUseCase: CreateSprintUseCase;

    beforeEach(() => {
        mock = new Mock();
        testUseCase = new CreateSprintUseCase(mock);
    });

    afterEach(() => {
        Mock.mockClear();
    });
    
    test('Should call repository createSprint method once', () => {
        testUseCase.execute(testData);
        expect(mock.createSprint).toHaveBeenCalledTimes(1);
    });

    test('Should return testData after execute method call', () => {
        const data = testUseCase.execute(testData);
        return expect(data).resolves.toEqual(testReturnValue);
    });
});