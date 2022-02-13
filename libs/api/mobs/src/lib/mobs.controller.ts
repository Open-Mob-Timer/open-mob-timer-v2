import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Mob } from '@omt/api/common';
import { MobCreateDto } from './dtos/mob-create.dto';
import { MobsService } from './mobs.service';

@Controller('mobs')
export class MobsController {
    constructor(private mobsService: MobsService) {}

    @Post()
    public async create(@Body() mob: MobCreateDto): Promise<Mob> {
        try {
            const result = this.mobsService.create(mob);

            return result;
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
