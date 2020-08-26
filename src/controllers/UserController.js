const User = require('../models/User')


module.exports = {
  async create(req, res) {
    const { name, email, password, rg, cpf } = req.body

    try {
      if(await User.findOne({ where: { rg } })) 
        return res.status(401).json({ message: 'User with this RG already exists' })
      if(await User.findOne({ where: { cpf } })) 
        return res.status(401).json({ message: 'User with this CPF already exists' })
      if(await User.findOne({ where: { email } })) 
        return res.status(401).json({ message: 'User with this EMAIL already exists' })

      const user = await User.create({ name, email, password, rg, cpf })

      return res.status(200).json(user)
    } catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Something wrong' })
    }
  }
}