import { GoogleAuthRoutes } from './routes/google.auth.routes';
import express, { Request, Response } from 'express';
import { passport } from './passport';
import session from 'express-session';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'SECRET',
  }),
);

app.listen(3333, () =>
  console.log(`Server started in http://localhost:${process.env.PORT}.`),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(GoogleAuthRoutes);
