import { Router, Request, Response } from 'express';
import { userProfile } from '../index';
import { passport } from '../passport';

const GoogleAuthRoutes = Router();

GoogleAuthRoutes.get('/', (request: Request, response: Response) =>
  response.render('pages/auth'),
);

// Success & Error
GoogleAuthRoutes.get('/success', (request: Request, response: Response) =>
  response.send(userProfile),
);

GoogleAuthRoutes.get('/error', (request: Request, response: Response) =>
  response.send('error logging in'),
);

// Redirects
GoogleAuthRoutes.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

GoogleAuthRoutes.get(
  '/home',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function (request, response) {
    const { user } = request;

    console.log(user);
    // Successful authentication, redirect success.
    response.render('pages/success', { user });
  },
);

export { GoogleAuthRoutes };
