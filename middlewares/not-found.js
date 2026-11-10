const notFound = (req, res) => {
  res.status(404).json({ msg: 'Route does not exisit' })
}

module.exports = notFound
