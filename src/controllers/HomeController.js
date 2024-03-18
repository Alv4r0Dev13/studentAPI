class HomeController {
  index(req, res) {
    res.status(200).json('index');
  }
}

export default new HomeController();
