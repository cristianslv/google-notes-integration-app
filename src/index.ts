import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.SECRET_CLIENT_ID;

export { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };
