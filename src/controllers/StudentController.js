import Student from '../models/Student';

class StudentController {
  async create(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      console.log('Created student');
      res.status(200).json(newStudent);
    } catch (err) {
      console.log(err);
      res.status(400).send({
        errors: err.errors.map(e => e.message),
      });
    }
  }
}

export default new StudentController();
