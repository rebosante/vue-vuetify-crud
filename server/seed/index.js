const {
  sequelize,
  Song,
  User
} = require('./models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

// next line is to clear the database
// sequelize.sync()
sequelize.sync({force: true})
  .then(async () => {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await songs.all(
      songs.map(song => {
        Song.create(song)
      })
    )
  })
