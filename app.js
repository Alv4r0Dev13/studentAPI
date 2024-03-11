// dotenv
import dotenv from 'dotenv';
dotenv.config();

// database
import database from './src/database';
database.init();

// Express
import express from 'express';
import routes from './src/routes';

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

    // database
  }

  routes() {
    this.app.use('/', routes);
  }
}

export default new App().app;
