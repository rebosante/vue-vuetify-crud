const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

// next line is to clear the database
// sequelize.sync()
sequelize.sync({force: true})
  .then(async () => {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )
    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
    await Promise.all(
      histories.map(history => {
        History.create(history)
      })
    )
  })
