const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const facebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User'); 


passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  // Match Email's User
  const user = await User.findOne({email: email});
  if (!user) {
    return done(null, false, { message: 'Not User found.' });
  } else {
    // Match Password's User
    const match = await user.matchPassword(password);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect Password.' });
    }
  }

}));


// passport.use(new GoogleStrategy({
//     clientID: '754521607662-hv6rsqqe43bui05slna6lptin2usv6a2.apps.googleusercontent.com',
//     // clientSecret:process.env.G_clientSecret,
//     clientSecret:'u6msXCwI0fSd17Tz9ns9hV4g',
//      callbackURL: "https://www.mahalosagrado.com/google/callback",
//     passReqToCallback:true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     console.log(profile)
//     return done(null, profile);  
//   }
// ));



passport.use(new GoogleStrategy({
    clientID: '754521607662-hv6rsqqe43bui05slna6lptin2usv6a2.apps.googleusercontent.com',
    // clientSecret:process.env.G_clientSecret,
    clientSecret:'u6msXCwI0fSd17Tz9ns9hV4g',
     callbackURL: "https://www.mahalosagrado.com/google/callback",
     proxy: true ,
     profileFields: ['_id', 'displayName', 'name','email'],
   
   },
   function(token, refreshToken, profile, done) { 
   
     // asynchronous
     process.nextTick(function() {
   
         // find the user in the database based on their facebook id
         User.findOne({ 'uid' : profile._id }, function(err, user) {
   
             // if there is an error, stop everything and return that
             // ie an error connecting to the database
             if (err)
                 return done(err);
   
             // if the user is found, then log them in
             if (user) {
                 console.log("user found")
                 console.log(user)
                 return done(null, user); // user found, return that user
             } else {
                 // if there is no user found with that facebook id, create them
                 var newUser            = new User();
   
                 // set all of the facebook information in our user model
                 newUser.uid    = profile._id; // set the users facebook id                   
                 newUser.token = token; // we will save the token that facebook provides to the user                    
                 newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                 newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                 // save our user to the database
                 newUser.save(function(err) {
                     if (err)
                         throw err;
   
                     // if successful, return the new user
                     return done(null, newUser);
                 });
             }
   
         });
   
     })
   
   }));
   








passport.use(new facebookStrategy({

  clientID        : '609262959772593',
  clientSecret    : '2d2720df970131309ee4aee9f69d8db0',
  callbackURL     : "https://www.mahalosagrado.com/facebook/callback",
  profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']

},// facebook will send back the token and profile
function(token, refreshToken, profile, done) {

  // asynchronous
  process.nextTick(function() {

      // find the user in the database based on their facebook id
      User.findOne({ 'uid' : profile.id }, function(err, user) {

          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
              return done(err);

          // if the user is found, then log them in
          if (user) {
              console.log("user found")
              console.log(user)
              return done(null, user); // user found, return that user
          } else {
              // if there is no user found with that facebook id, create them
              var newUser            = new User();

              // set all of the facebook information in our user model
            //  newUser.uid    = profile.id; // set the users facebook id                   
              newUser.token = token; // we will save the token that facebook provides to the user                    
              newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
              newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
              // newUser.gender = profile.gender
              // newUser.pic = profile.photos[0].value
              // save our user to the database
              newUser.save(function(err) {
                  if (err)
                      throw err;

                  // if successful, return the new user
                  return done(null, newUser);
              });
          }

      });

  })

}));











passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
