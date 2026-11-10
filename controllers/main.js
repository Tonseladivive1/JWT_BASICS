const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { name, password } = req.body
  if (!name || !password) {
    throw new CustomAPIError('please provide values', 401)
  }
  const id = new Date().getDate()
  const token = jwt.sign({ name, id }, process.env.JWTSECRET, {
    expiresIn: '30d',
  })
  res.status(201).json({ msg: 'user created', data: token })
}
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)

  const authHeaders = req.headers.authorization
  // console.log(authHeaders)
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new CustomAPIError('No token present', 400)
  }
  const token = authHeaders.split(' ')[1]
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET)

    res.status(200).json({
      msg: `Hey ${decoded.name}`,
      data: `Your lucky number is ${luckyNumber}`,
    })
  } catch (error) {
    throw new CustomAPIError('Not authorized', 401)
  }
}

module.exports = {
  login,
  dashboard,
}
