// dotenv
import dotenv from 'dotenv';
dotenv.config();

// database
import database from './database';
database.init();

// Express
import express from 'express';
import routes from './routes';

// Misc
import { resolve } from 'path';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // express
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', routes);
  }
}

export default new App().app;
