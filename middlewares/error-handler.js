const CustomAPIError = require('../errors/custom-error')

const errorHandler = async (error, req, res, next) => {
  console.log(error.message)
  if (error instanceof CustomAPIError) {
    res.status(error.statusCode).json({ msg: error.message })
  }
  res.status(500).json({ msg: 'Something went wrong' })
}

module.exports = errorHandler
