import { UsersService } from "../users/users.service";
import { DatabaseService } from "../database/database.service";
export declare class EggController {
    private usersService;
    private database;
    constructor(usersService: UsersService, database: DatabaseService);
    onModuleInit(): Promise<void>;
}
