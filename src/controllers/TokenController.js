import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;
      if (!email || !password)
        return res.status(401).json({
          errors: ['Invalid credentials!'],
        });

      const user = await User.findOne({ where: { email } });
      if (!user)
        return res.status(401).json({
          errors: ['User does not exist!'],
        });

      if (!(await user.validatePassword(password)))
        return res.status(401).json({
          errors: ['Invalid password!'],
        });

      const { id, name } = user;
      const token = jwt.sign(
        { id, email },
        process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_TIME }
      );

      return res.status(200).json({ token, user: { id, name, email } });
    } catch (err) {
      return res.status(500).json(null);
    }
  }
}

export default new TokenController();
