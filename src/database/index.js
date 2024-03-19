import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Photo from '../models/Photo';
import Student from '../models/Student';
import User from '../models/User';

const models = [Student, User, Photo];

class Database {
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.forEach(model => model.init(this.connection));
    models.forEach(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
