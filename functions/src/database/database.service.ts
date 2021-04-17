import {Injectable, NotFoundException} from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class DatabaseServiceUser {
    constructor(private readonly database) {}

    async getById(userId: string) {
        const user = await admin.database().ref('users/' + userId).get();

        if (user.key) {
            return user.key
        }

        throw new NotFoundException()
    }

    async get() {
        const users = await admin.database().ref('users').get();

        console.log(users)

        throw new NotFoundException()
    }
}
