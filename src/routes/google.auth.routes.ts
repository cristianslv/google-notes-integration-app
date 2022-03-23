import { Router, Request, Response } from 'express';
import { passport } from '../passport';

const GoogleAuthRoutes = Router();

GoogleAuthRoutes.get('/', (request: Request, response: Response) =>
  response.render('pages/auth'),
);

// Success & Error
GoogleAuthRoutes.get('/dashboard', (request: Request, response: Response) => {
  response.json({ name: request.user, asd: request.isAuthenticated() });
});

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
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/error',
  }),
);

export { GoogleAuthRoutes };
