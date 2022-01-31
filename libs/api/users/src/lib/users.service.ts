import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    public findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    public async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
