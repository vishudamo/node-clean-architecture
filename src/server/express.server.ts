import * as bodyParser from 'body-parser';
import { Express } from 'express';
import { Server } from 'http';
import * as mongoose from 'mongoose';

import { Routes } from './routes';

export class ExpressServer {
    public httpServer: Server;

    constructor(server: Express, port: number) {
      this.setupStandardMiddleware(server);
      new Routes(server);
      this.httpServer = this.startListen(server, port);
    }

    public startListen(server: Express, port: number): Server {
      return server.listen(port);
    }

    public connectDB(uri: string) {
      mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
      return mongoose;
    }

    private setupStandardMiddleware(server: Express) {
        server.use(bodyParser.json());

        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
              'Access-Control-Allow-Headers',
              'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
          });
    }

}