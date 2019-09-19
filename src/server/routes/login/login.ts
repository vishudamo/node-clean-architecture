import { Express, Request, Response, NextFunction } from 'express';
import { UserController } from '../../../controller/user';

export class LoginRoute {
    private server: Express;

    constructor(server: Express) {
        this.server = server;
    }

    public authenticateUser = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await new UserController().authenticateUser(req.body);
            res.send(result);
        } catch(e) {

        }
    };

    public configureEndPoints(baseUrl: string) {
        this.server.post(`${baseUrl}login/?`, this.authenticateUser);
    }
}