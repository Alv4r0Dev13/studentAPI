import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      console.log('Created user');
      return res.status(200).json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map(e => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id)
        return res.status(400).json({
          errors: [
            'No ID provided!'
          ]
        });
      const user = await User.findByPk(id);
      if (!user)
        return res.status(400).json(
          {
            errors: [
              'User does not exist!'
            ]
          });

      const updated = await user.update(req.body);
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id)
        return res.status(400).json({
          errors: ['No ID provided!'],
        });

      const user = await User.findByPk(id);
      if (!user)
        return res.status(400).json({
          errors: ['User does not exist!'],
        });

      await user.destroy();

      return res.status(200).json(user);
    } catch (err) {

    }
  }
}

export default new UserController();
