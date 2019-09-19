import { SprintMapper } from './sprint-mapper';
import { Sprint } from '../../application/domain';
import { SprintEntity } from '../entities';

const testModel: Sprint = {
    sprintNo: 1,
    status: false,
    creation_date: null
};

const testEntity: SprintEntity = {
    _id: null,
    sprintNo: 1,
    status: false,
    creation_date: null
};

describe('Sprint Mapper', () => {
    let mapper: SprintMapper;

    beforeEach(() => {
        mapper = new SprintMapper();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should mapFrom convert sprintModel to SprintEntity', () => {
        const data = mapper.mapFrom(testModel);
        expect(data).toEqual(testEntity);
    });

    test('Should mapTo convert SprintEntity to SprintModel', () => {
        const data = mapper.mapTo(testEntity);
        expect(data).toEqual(testModel);
    })
});