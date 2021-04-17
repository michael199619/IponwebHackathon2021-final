"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EggController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const database_service_1 = require("../database/database.service");
let EggController = class EggController {
    constructor(usersService, database) {
        this.usersService = usersService;
        this.database = database;
    }
    async onModuleInit() {
        this.database.test();
    }
};
EggController = __decorate([
    common_1.Controller('egg'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        database_service_1.DatabaseService])
], EggController);
exports.EggController = EggController;
//# sourceMappingURL=egg.controller.js.map