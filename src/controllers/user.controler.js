const UserServ = require("../services/user.service");
const response = require("./../utils/response");

class UserContoller {
  async create(req, res) {
    const result = await UserServ.create(req.body);
    res.status(200).send(response.success("User created", result));
  }

  async getAll(req, res) {
    const result = await UserServ.getAll();
    res.status(200).send(response.success("All users", result));
  }

  async getOne(req, res) {
    const result = await UserServ.getOne(req.params.userId);
    res.status(200).send(response.success("User data", result));
  }

  async update(req, res) {
    const result = await UserServ.update(req.params.userId, req.body);
    res.status(200).send(response.success("User updated", result));
  }

  async delete(req, res) {
    const result = await UserServ.delete(req.params.userId);
    res.status(200).send(response.success("User deleted", result));
  }
}

module.exports = new UserContoller();
