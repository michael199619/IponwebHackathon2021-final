import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<void>;
    getAll(): Promise<void>;
    addRole(dto: AddRoleDto): Promise<void>;
    ban(dto: BanUserDto): Promise<void>;
}
