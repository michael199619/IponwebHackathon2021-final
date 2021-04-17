import {registerAs} from '@nestjs/config';

export const app = registerAs('app', () => ({
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    jwt_secret_expires: process.env.JWT_SECRET_EXPIRES
}));