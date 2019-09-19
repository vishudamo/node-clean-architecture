import { Express, Request, Response, NextFunction } from 'express';
import { SprintController } from '../../../controller';

export class SprintRoute {
    private server: Express;

    constructor(server: Express) {
        this.server = server;
    }

    public getAllSprints = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await new SprintController().getAllSprints();
            res.send(result);
        } catch(e) {

        }
    }

    public createSprint = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await new SprintController().createSprint(req.body);
            res.send(result);
        } catch(e) {
            
        }
    }

    public configureEndPoints(baseUrl: string) {
        this.server.get(`${baseUrl}sprints`, this.getAllSprints);
        this.server.post(`${baseUrl}sprints`, this.createSprint);
    }
}