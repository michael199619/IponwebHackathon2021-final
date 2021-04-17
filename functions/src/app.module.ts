import {Module} from '@nestjs/common';
import {UsersModule} from "./users/users.module";
import {DatabaseModule} from "./database/database.module";
import {AppConfigModule} from "./config/config.module";

@Module({
    imports: [
        AppConfigModule,
        DatabaseModule,
        UsersModule
    ],
    providers: [],
    controllers: []
})
export class AppModule {}
