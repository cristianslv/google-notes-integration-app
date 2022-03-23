import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './index';
import { OAuth2Strategy } from 'passport-google-oauth';
import passport from 'passport';

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new OAuth2Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3333/home',
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const user = {
        id: profile.id,
        name: profile.name,
        profile,
        accessToken,
        refreshToken,
      };

      return done(null, user);
    },
  ),
);

export { passport };
