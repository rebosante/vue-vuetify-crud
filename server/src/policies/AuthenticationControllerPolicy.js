const Joi = require('joi')
module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email ' + value
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match these rules: <br> 1. it must contain xx chars <br> 2. it must be at least 8 chars`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid reg info ' + value
          })
      }
    } else {
      next()
    }
  }
}
