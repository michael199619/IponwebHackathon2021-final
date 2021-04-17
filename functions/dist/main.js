"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detect = exports.api = exports.createNestServer = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express = require("express");
const functions = require("firebase-functions");
const common_1 = require("@nestjs/common");
const server = express();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: {
            excludeExtraneousValues: true
        }
    }));
    return app.init();
};
exports.createNestServer = createNestServer;
exports.createNestServer(server)
    .then(v => console.log('Nest Ready'))
    .catch(err => console.error('Nest broken', err));
exports.api = functions.https.onRequest(server);
exports.detect = functions.database.ref('users/{userId}/Name').onWrite(() => {
    console.log(9);
});
//# sourceMappingURL=main.js.map