import { Express, Request, Response, NextFunction } from 'express';
import { BoardsController } from '../../../controller/boards/boards.controller';

export class BoardsRoute {
    private server: Express;

    constructor(server: Express) {
        this.server = server;
    }

    public getBoardsData = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await new BoardsController().getBoardsData(req.query.sprintId);
            res.send(result);
        } catch(e) {

        }
    };

    public addNewNote = async(req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Add New Like Note Called');
            const result = await new BoardsController().addNewLikeNote(req.body);

            if(result) {
                res.send(true);
            } 
            res.send('failed')
        } catch(e) {

        }
    };

    public configureEndPoints(baseUrl: string) {
        this.server.get(`${baseUrl}boards/?`, this.getBoardsData);
        this.server.post(`${baseUrl}board/?`, this.addNewNote);
    }
}