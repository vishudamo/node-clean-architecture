import { Express, Request, Response, NextFunction } from 'express';
import { UserController } from '../../../controller/user';

export class RegisterRoute {
    private server: Express;

    constructor(server: Express) {
        this.server = server;
    }

    public addNewUser = async(req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Add New User called');
            const result = await new UserController().registerUser(req.body);
            res.send(result);
        } catch(e) {

        }
    };

    public configureEndPoints(baseUrl: string) {
        console.log('Register Route');
        this.server.post(`${baseUrl}register/`, this.addNewUser);
    }
}