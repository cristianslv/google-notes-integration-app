import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (request, response) =>
  response.render('home', { CLIENT_ID: process.env.CLIENT_ID }),
);

app.listen(3333, () =>
  console.log(`server started in http://localhost:${process.env.PORT}`),
);
