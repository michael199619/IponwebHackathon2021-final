import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersService {
    constructor();
    createUser(dto: CreateUserDto): Promise<void>;
    getAllUsers(): Promise<void>;
    getUserByEmail(email: string): Promise<void>;
    addRole(dto: AddRoleDto): Promise<void>;
    ban(dto: BanUserDto): Promise<void>;
}
