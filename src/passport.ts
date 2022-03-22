import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './index';
import { OAuth2Strategy } from 'passport-google-oauth';
import passport from 'passport';
import { OAuth2Client } from 'google-auth-library';

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
      request.user = { profile, accessToken };

      const token = OAuth2Client.getRevokeTokenUrl(accessToken);
      console.log(token);

      return done(null, request.user);
    },
  ),
);

export { passport };
