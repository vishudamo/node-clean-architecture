import * as express from 'express';
import { Express } from 'express';

import { Routes } from './routes';
import { SprintRoute } from './sprint';

jest.mock('express', () => {
    return require('jest-express');
});

// jest.mock('./sprint/sprint.routes', () => {
//     return jest.fn().mockImplementation(() => {
//         return { configureApiEndPoints: () => {}}
//     });
// });

jest.mock('./sprint/sprint.routes');

describe('Routes', () => {
    let server: Express;

    beforeEach(() => {
        server = express();
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Should call configureApiEndPoints once', () => {
        const spy = jest.spyOn(Routes.prototype, 'configureApiEndPoints');
        const route = new Routes(server);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('Should invoke SprintRoute Class once', () => {
        const app = new Routes(server);
        expect(SprintRoute).toHaveBeenCalledTimes(1);
    });

    test('Should call configureApiEndPoints from SprintRoute', () => {
        const spy = jest.spyOn(SprintRoute.prototype, 'configureEndPoints');
        const app = new Routes(server);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});