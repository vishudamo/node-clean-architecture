import { Express } from 'express';
import { SprintRoute } from './sprint';
import { BoardsRoute } from './boards/boards';
import { RegisterRoute } from './register/register';
import { LoginRoute } from './login/login';

export class Routes {
    private server: Express;
    private sprintRoute: SprintRoute;
    private boardsRoute: BoardsRoute;
    private registerRoute: RegisterRoute;
    private loginRoute: LoginRoute;
    private baseUrl: string = '/api/v1/';

    constructor(server: Express) {
        this.server = server;
        this.sprintRoute = new SprintRoute(server);
        this.boardsRoute = new BoardsRoute(server);
        this.registerRoute = new RegisterRoute(server);
        this.loginRoute = new LoginRoute(server);
        this.configureApiEndPoints(this.baseUrl);
    }

    public configureApiEndPoints(baseUrl: string) {
      this.sprintRoute.configureEndPoints(baseUrl);
      this.boardsRoute.configureEndPoints(baseUrl);
      this.registerRoute.configureEndPoints(baseUrl);
      this.loginRoute.configureEndPoints(baseUrl);
    }
}