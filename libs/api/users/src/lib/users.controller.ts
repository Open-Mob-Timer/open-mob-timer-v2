import { Controller, Get, Param } from '@nestjs/common';
import { UserResponseDto } from './dtos/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<UserResponseDto> {
        return await this.usersService.findOne(id);
    }

    @Get()
    public findAll(): string {
        return 'hello';
    }
}
