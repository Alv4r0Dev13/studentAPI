import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.status(200).json(students);
    } catch (err) {
      return res.send(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student)
        return res.status(400).json({
          errors: ['Student does not exist!'],
        });
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json({
        errors: err.errors.map(e => e.message),
      });
    }
  }

  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.status(200).json(newStudent);
    } catch (err) {
      return res.status(400).send({
        errors: err.errors.map(e => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student)
        return res.send(400).json({
          errors: ['Student does not exist!'],
        });

      const updated = await student.update(req.body);
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(500).json({
        errors: err.errors.map(e => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student)
        return res.send(400).json({
          errors: ['Student does not exist!'],
        });
      await student.destroy();
      return res.status(200).json('deleted');
    } catch (err) {
      return res.status(500).json({
        errors: err.errors.map(e => e.message),
      });
    }
  }
}

export default new StudentController();
