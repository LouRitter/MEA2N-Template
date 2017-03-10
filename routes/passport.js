var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Model = require('./model/models.js')

module.exports = function(app) {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy(
    function(username, password, done) {
      Model.User.findOne({
        where: {
          'username': username,
          'password': password
        }
      }).then(function (user) {
        if (user == null) {
          return done(null, false, { message: 'Incorrect credentials.' })
        }
        
        
        
        if (user.password === password) {
          return done(null, user)
        }
        