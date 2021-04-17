import {forwardRef, Module} from '@nestjs/common';
import * as admin from 'firebase-admin';
import {DatabaseService} from "./database.service";
import * as functions from "firebase-functions";

@Module({
    providers: [
        {
            provide: DatabaseService,
            useFactory: () => {
                admin.initializeApp(functions.config().firebase);
                const database = admin.database();
                return new DatabaseService(database)
            }
        }
    ],

    exports: [DatabaseService]
})
export class DatabaseModule {
}
