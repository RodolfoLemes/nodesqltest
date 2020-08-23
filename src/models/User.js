const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }
}

module.exports = User