const User = require('../models/User')

module.exports = {
  async authenticate(req, res) {
    const { cpf, password } = req.body

    const user = await User.findOne({ where: { cpf } })

    if(!user) 
      return res.status(401).json({ message: 'User not found' })

    if(!await user.checkPassword(password))
      return res.status(401).json({ message: 'Password not match' })

    return res.status(200).json({
      user,
      token: user.generateToken()
    })
  }
}