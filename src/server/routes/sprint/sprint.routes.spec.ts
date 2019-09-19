import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import * as request from 'supertest';

import { SprintRoute } from './sprint.routes';
import { SprintController } from '../../../controller';
import * as app from '../../../app';


jest.mock('express', () => {
    return require('jest-express');
});

const mockRequest = {} as Request;
const mockResponse = {} as Response;
const mockNext = {} as NextFunction;

jest.mock('../../../controller/sprint/sprint.controller');

jest.mock('../../express.server');


describe('Sprint Routes', () => {
    let server: Express;
    let mockUrl: string;

    beforeEach(() => {
        server = express();
        mockUrl = '/api/v1/sprints';
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should invoke SprintController once when getAllSprints called', () => {
        const sprint = new SprintRoute(server);
        const mockGetAllSprints = sprint.getAllSprints(mockRequest, mockResponse, mockNext);
        expect(SprintController).toHaveBeenCalledTimes(1);
    });

    test('Should call SprintController getAllSprints method once when getAllSprint in SprintRoute called', () => {
        const spy = jest.spyOn(SprintController.prototype, 'getAllSprints');
        const sprint = new SprintRoute(server);
        sprint.getAllSprints(mockRequest, mockResponse, mockNext);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('Should invoke SprintController once when createSprint in SprintRoute called', () => {
        const sprint = new SprintRoute(server);
        const mockCreatSprint = sprint.createSprint(mockRequest, mockResponse, mockNext);
        expect(SprintController).toHaveBeenCalledTimes(1);
    });

    test('Should call SprintController creatSprint method once when createSprint in SprintRoute called', () => {
        const spy =jest.spyOn(SprintController.prototype, 'createSprint');
        const sprint = new SprintRoute(server);
        sprint.createSprint(mockRequest, mockResponse, mockNext)
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // test('Api Integration', (done) => {
    //     return request(app).get(mockUrl).expect(200);
    // }); 
});