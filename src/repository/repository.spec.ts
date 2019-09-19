import { Repository } from './repository';
import { SprintMapper } from './mapper/sprint-mapper';

jest.mock('./mapper/sprint-mapper');

describe('Repository', () => {
    let repository: Repository;

    beforeEach(() => {
        repository = Repository.getInstance();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should invoke once SprintMapper', () => {
        expect(SprintMapper).toHaveBeenCalledTimes(1);
    });

    test('Should invoke as singleton returning same instance', () => {
        expect(Repository.getInstance).toBe(Repository.getInstance);
    });
});