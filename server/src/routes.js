module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hi ${req.body.email}! Your user is registered succesfully`
      // message: 'Hi'
    })
  })
}