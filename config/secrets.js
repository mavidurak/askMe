module.exports = {
  db: process.env.MONGOLAB_URI || process.env.MONGODB || 'mongodb://10.7.81.41/sabis',
  sessionSecret: process.env.SESSION_SECRET || 'kivircikSaclarinaAkDusmusGormelof',
  twitter: {
    consumerKey: process.env.TWITTER_KEY || '6NNBDyJ2TavL407A3lWxPFKBI',
    consumerSecret: process.env.TWITTER_SECRET  || 'ZHaYyK3DQCqv49Z9ofsYdqiUgeoICyh6uoBgFfu7OeYC7wTQKa',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  }
};
