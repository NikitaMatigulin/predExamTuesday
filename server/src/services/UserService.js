const { User } = require("../db/models");

class UserService {
  static async create(data) {
    const user = await User.create(data);
    return await user;
  }
  static async getByEmail(email) {
    const userEmail = await User.findOne({ where: { email } });
    return await userEmail;
  }
}

module.exports = UserService;
