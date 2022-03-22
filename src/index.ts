import dotenv from 'dotenv';

dotenv.config();

let userProfile;
let userAccessToken;
const GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.SECRET_CLIENT_ID;

export { userProfile, userAccessToken, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };