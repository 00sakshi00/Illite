const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User= require('../models/user');

//Authenticate
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
            console.log('error in finding user'); 
            return done(err); 
        }
        if (!user || user.password!=password) {
            console.log('Invalid username/password'); 
            return done(null, false); 
        }
        return done(null, user);
      });
    }
  ));


//Serialize user to decide which key to be kept in cookie
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// deserializing user from key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user');
            return done(err);
        }
        return done(null,user);
    });
});

module.exports = passport; 