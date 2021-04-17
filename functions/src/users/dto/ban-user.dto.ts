import {Expose} from 'class-transformer';
import {IsInt, IsNumber, IsString} from 'class-validator';

export class BanUserDto {
    @Expose()
    @IsInt()
    readonly userId: number;

    @Expose()
    @IsString()
    readonly banReason: string;
}
