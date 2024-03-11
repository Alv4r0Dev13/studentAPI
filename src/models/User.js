import bcryptjs from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field "name" must contain between 3 and 255 characters!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already registered!'
        },
        validate: {
          isEmail: {
            msg: 'Invalid email!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 255],
            msg: 'Password must contain between 8 and 255 characters!',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'users'
    });
    this.addHook('beforeSave', async user => {
      if (user.password)
        user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
