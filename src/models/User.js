const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
      sequelize: connection,
      hooks: {
        beforeSave: async user => {
          if(user.password) user.password_hash = await bcrypt.hash(user.password, 8)
        }
      },
      
    })
  }

  static associate(models) {

  }
}

User.prototype.checkPassword = function(password) {
  return bcrypt.compare(password, this.password_hash)
}

User.prototype.generateToken = function() {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET)
}

module.exports = User