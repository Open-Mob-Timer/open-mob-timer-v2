import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobComponent } from './mob.component';
import { MobRoutingModule } from './mob-routing.module';

@NgModule({
    imports: [CommonModule, MobRoutingModule],
    declarations: [MobComponent],
    exports: [MobComponent]
})
export class MobModule {}
