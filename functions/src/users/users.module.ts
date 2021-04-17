import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {DatabaseModule} from "../database/database.module";
import {ImageService} from "./image.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService, ImageService],
    imports: [
    ],
    exports: [UsersService]
})
export class UsersModule {
}
