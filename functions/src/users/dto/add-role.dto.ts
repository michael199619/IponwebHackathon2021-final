import {IsNumber, IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class AddRoleDto {
    @Expose()
    @IsString()
    readonly value: string;

    @Expose()
    @IsNumber()
    readonly userId: number;
}
