import * as express from 'express';
import { Express } from 'express';

import { ExpressServer } from './express.server';
import { Routes } from './routes';

/**
 * MOCKS
 */
jest.mock('express', () => {
    return require('jest-express');
});

jest.mock('./routes');
/**
 * TESTS
 */
describe('Express Server', () => {
    let server: Express;
    let app: ExpressServer;
    let testPort: 3000;

    beforeEach(() => {
        server = express();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should invoke express once', () => {
        const spy = jest.spyOn(ExpressServer.prototype, 'startListen');
        app = new ExpressServer(server, testPort);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('Should invoke Route Class once', () => {
        app =  new ExpressServer(server, testPort);
        expect(Routes).toHaveBeenCalledTimes(1);
    });
});