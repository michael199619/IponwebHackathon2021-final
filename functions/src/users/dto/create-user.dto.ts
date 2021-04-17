import {IsEmail, IsString, Length, } from 'class-validator';
import {Expose} from 'class-transformer';

export class CreateUserDto {
    @IsString()
    @IsEmail()
    @Expose()
    readonly email: string;

    @IsString()
    @Length(4, 16)
    @Expose()
    readonly password: string;
}
