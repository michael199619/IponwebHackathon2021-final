import * as functions from 'firebase-functions';
export declare const createNestServer: (expressInstance: any) => Promise<import("@nestjs/common").INestApplication>;
export declare const api: functions.HttpsFunction;
export declare const detect: functions.CloudFunction<functions.Change<functions.database.DataSnapshot>>;
