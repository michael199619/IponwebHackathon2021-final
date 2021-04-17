import { Module } from '@nestjs/common';
import {app} from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [app],
            envFilePath: `.env`,
        })
    ],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class AppConfigModule {}