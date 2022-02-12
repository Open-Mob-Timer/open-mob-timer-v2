import { Body, Controller, Post } from '@nestjs/common';
import { Mob } from '@omt/api/common';
import { MobCreateDto } from './dtos/mob-create.dto';
import { MobsService } from './mobs.service';

@Controller('mobs')
export class MobsController {
    constructor(private mobsService: MobsService) {}
    @Post()
    public create(@Body() mob: MobCreateDto): Mob {
        return this.mobsService.create(mob);
    }
}
